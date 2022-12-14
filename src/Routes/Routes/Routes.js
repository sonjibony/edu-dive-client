import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Home from "../../components/Home/Home";
import CoursesLayout from "../../layout/CoursesLayout";
import Main from "../../layout/Main";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Checkout from "../../components/Checkout/Checkout";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Faq from "../../components/Faq/Faq";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <CoursesLayout></CoursesLayout>,

        children: [
          {
            path: "/courses",
            element: <Courses></Courses>,
            loader: () => fetch("https://edu-dive-server.vercel.app/courses"),
          },
          {
            path: "/courses/:id",
            element: <CourseDetails></CourseDetails>,
            loader: ({ params }) =>
              fetch(`https://edu-dive-server.vercel.app/courses/${params.id}`),
          },
        ],
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://edu-dive-server.vercel.app/checkout/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

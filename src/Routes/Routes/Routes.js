import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Home from "../../components/Home/Home";
import CoursesLayout from "../../layout/CoursesLayout";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <CoursesLayout></CoursesLayout>,
                children:[
                    {
                        path: '/courses',
                        element: <Courses></Courses>,
                    },
                    {
                        path: '/courses/:id',
                        element: <CourseDetails></CourseDetails>
                    }
                ]
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/*',
                element: <div>sorry</div>
            },
        ]
    }
])
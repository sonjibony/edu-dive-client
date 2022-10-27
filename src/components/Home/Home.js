import React from "react";
import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import Instructors from "../Instructors/Instructors";
import Missions from "../Missions/Missions";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Instructors></Instructors>
      <h1
        className="mt-4"
        style={{ fontSize: "50px", color: "#fd5e2a ", fontWeight: "bolder" }}
      >
        FEATURES
      </h1>

      <Missions></Missions>
      <Events></Events>
    </div>
  );
};

export default Home;

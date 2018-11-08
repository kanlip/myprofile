import React from "react";
import Tabs from "./projectTabs";
import Card from "./projectCards";

const Project = React.memo(() => {
  return (
    <div>
      <Tabs>
        <div label="All">
          <Card type="all" />
        </div>
        <div label="Experience">
          <Card type="experience" />
        </div>
        <div label="Web">
          <Card type="web" />
        </div>
        <div label="Application">
          <Card type="app" />
        </div>
        <div label="Game">
          <Card type="game" />
        </div>
      </Tabs>
    </div>
  );
});
export default Project;
import React from "react";

function projectHover() {
  const projects = document.querySelectorAll(".card-horizontal");
  projects.forEach((project) => {
    project.onmouseover = (e) => {
      const hoverContent = project.querySelector(".project-hover");
      console.log(e);
    };
  });
}

export default projectHover;

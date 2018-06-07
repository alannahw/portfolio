import React, { Component } from "react";
import Project from "./Project.js";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Projects } from "./ProjectsContent.js";
import Toolbar from "./Toolbar";
import Header from "./Header";
import _ from "lodash";
import "./App.css";

const CtStyle = styled.div`
  width: 100%;
  font-family: "Century Gothic", sans-serif;
  color: ${props => props.theme.text};
  background: ${props => props.theme.bg};
`;
const Theme = {
  bg: "#f3f3f3",
  text: "#333",
  textlight1: "#888",
  textlight2: "#aaa",
  main: "#18e2c8"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterType: "",
      filterVal: ""
    };
  }
  filterProjects = (projects, type, value) => {
    if (!type) {
      return projects;
    } else if (type === "skill") {
      return projects.filter(p => _.some(p.skills, value));
    } else if (type === "project") {
      return projects.filter(p => p.name === value);
    } else if (type === "date") {
      return projects;
    }
  };
  getSkillArray = projects => {
    let skillArray = [{ id: "allskills", name: "All Skills" }];
    projects.forEach(p => {
      p.skills.forEach(s => {
        if (_.some(skillArray, s)) {
          return;
        } else {
          skillArray.push(s);
        }
      });
    });
    return skillArray;
  };
  getProjectArray = projects => {
    let projectArray = [{ id: "allprojects", name: "All Projects" }];
    projects.forEach(p => projectArray.push({ id: p.name, name: p.title }));
    return projectArray;
  };
  setFilter = (type, val) => {
    this.setState({ filterType: type, filterVal: val });
  };

  render() {
    const { filterType, filterVal } = this.state;
    const FilteredProjects = this.filterProjects(
      Projects,
      filterType,
      filterVal
    );
    const Skills = this.getSkillArray(Projects);
    const ProjectNames = this.getProjectArray(Projects);
    return (
      <ThemeProvider theme={Theme}>
        <CtStyle>
          <Header />
          <Toolbar
            skills={Skills}
            projectNames={ProjectNames}
            setFilter={this.setFilter}
            filterType={filterType}
            filterVal={filterVal}
          />
          {FilteredProjects.map(p => {
            return <Project key={p.name} project={p} />;
          })}
        </CtStyle>
      </ThemeProvider>
    );
  }
}

export default App;

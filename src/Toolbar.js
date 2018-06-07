import React, { Component } from "react";
import styled from "styled-components";
import { Projects } from "./ProjectsContent";
import Dropdown from "./DropDown";

const Ct = styled.div`
  width: 100%;
  max-width: 960px;
  margin: auto;
  padding: 20px 0;
  text-align: right;
  box-sizing: border-box;
`;

class Toolbar extends Component {
  setSkillFilter = item => {
    if (item.id === "allskills") {
      this.props.setFilter("", "");
    } else {
      this.props.setFilter("skill", item);
    }
  };
  setProjectFilter = item => {
    if (item.id === "allprojects") {
      this.props.setFilter("", "");
    } else {
      this.props.setFilter("project", item.id);
    }
  };
  render() {
    const { skills, filterType, filterVal, projectNames } = this.props;
    return (
      <Ct>
        <Dropdown
          menuTitle="All Skills"
          items={skills}
          handleOnClick={this.setSkillFilter}
          activeItemId={filterType === "skill" ? filterVal.id : ""}
          showActiveName
        />{" "}
        <Dropdown
          menuTitle="All Projects"
          items={projectNames}
          handleOnClick={this.setProjectFilter}
          activeItemId={filterType === "project" ? filterVal : ""}
          showActiveName
        />
      </Ct>
    );
  }
}

export default Toolbar;

import React, { Component } from "react";
import styled from "styled-components";

const Ct = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto 50px;
  padding-bottom: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
    padding-bottom: 100px;
    margin-bottom: 0px;
  }
`;
const ImageMain = styled.img`
  width: 100%;
  height: 70vw;
  max-height: 600px;
  object-fit: cover;
  background: white;
`;
const ImageFullPage = styled.img`
  width: 100%;
  object-fit: cover;
  background: white;
`;
const ImageSub = styled.img`
  display: inline-block;
  width: 24.6%;
  margin-right: 0.53%;
  object-fit: cover;
  box-sizing: border-box;
  &:last-child {
    margin-right: 0px;
  }
  @media (max-width: 600px) {
    width: 49.5%;
    margin-right: 0.5%;
  }
`;
const Title = styled.div`
  font-size: 36px;
  text-align: right;
  @media (max-width: 700px) {
    text-align: left;
    font-size: 21px;
  }
`;
const Subtitle = styled.div`
  font-size: 21px;
  line-height: 2;
  text-align: right;
  color: ${props => props.theme.textlight1};
  @media (max-width: 700px) {
    text-align: left;
    font-size: 16px;
  }
`;
const SkillList = styled.ul`
  font-size: 18px;
  text-align: right;
  line-height: 1.5;
  padding: 0px;
  margin: 5px 0px;
  color: ${props => props.theme.textlight2};
  @media (max-width: 700px) {
    text-align: left;
    font-size: 14px;
  }
`;
const Skill = styled.li`
  list-style: none;
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 1.5;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
const WebsiteLink = styled.a`
  font-size: 14px;
  line-height: 1.5;
  color: ${props => props.theme.main}
  text-decoration: none;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
const Attribution = styled.a`
  font-size: 12px;
  color: ${props => props.theme.textlight2}
  text-decoration: none;
  text-align: right;
`;
const Col = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 50%;
  padding: 5px 10px;
  box-sizing: border-box;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const Row = styled.div`
  width: 100%;
  padding: 50px 0px;
  box-sizing: border-box;
`;

class Project extends Component {
  render() {
    const { project } = this.props;
    return (
      <Ct>
        <ImageMain src={`${project.name}_main.jpg`} />
        <div>
          <ImageSub src={`${project.name}_sub_1.jpg`} />
          <ImageSub src={`${project.name}_sub_2.jpg`} />
          <ImageSub src={`${project.name}_sub_3.jpg`} />
          <ImageSub src={`${project.name}_sub_4.jpg`} />
        </div>
        <Row>
          <Col>
            <Title>{project.title}</Title>
            <Subtitle>{project.subtitle}</Subtitle>
            <SkillList>
              {project.skills.map((s, i) => {
                return (
                  <Skill key={`${project.name}_skill_${i}`}>{s.name}</Skill>
                );
              })}
            </SkillList>
          </Col>
          <Col>
            <Description>{project.description}</Description>
            {project.website ? (
              <WebsiteLink target="_blank" href={project.website}>
                {project.website}
              </WebsiteLink>
            ) : (
              <span />
            )}
          </Col>
        </Row>
        <ImageFullPage src={`${project.name}_fullpage.jpg`} />
        {project.attribution ? (
          <Attribution target="_blank" href={project.attribution}>
            Template attribution
          </Attribution>
        ) : (
          <span />
        )}
      </Ct>
    );
  }
}

export default Project;

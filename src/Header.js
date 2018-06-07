import React, { Component } from "react";
import styled from "styled-components";

const Ct = styled.div`
  width: 100%;
  background: ${props => props.theme.bg};
  padding: 30px 0;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
`;
const InnerCt = styled.div`
  max-width: 960px;
  margin: auto;
`;
const Title = styled.div`
  font-size: 36px;
  color: ${props => props.theme.main};
  @media (max-width: 700px) {
    font-size: 21px;
  }
`;
const Subtitle = styled.div`
  font-size: 21px;
  line-height: 2;
  color: ${props => props.theme.textlight2};
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;
const Description = styled.div`
  font-size: 14px;
  line-height: 1.5;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
const Contact = styled.div`
  font-size: 14px;
  line-height: 1.5;
  text-align: right;
  @media (max-width: 700px) {
    text-align: left;
  }
`;
const ContactTitle = Contact.extend`
  color: ${props => props.theme.main};
`;
const GreyText = styled.span`
  color: ${props => props.theme.textlight2};
`;
const Col = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 50%;
  padding: 5px 0px;
  box-sizing: border-box;
  @media (max-width: 700px) {
    width: 100%;
    padding: 5px 10px;
  }
`;

class Header extends Component {
  render() {
    return (
      <Ct>
        <InnerCt>
          <Col>
            <Title>Alanna Howe</Title>
            <Subtitle>Graphic & UX Designer</Subtitle>
            <Description>
              Alanna is a freelance designer of the nomadic type who's closest
              home is Berlin, where she studies, works, reads and dreams her way
              through life, usually with a cup of tea in hand. She has a
              penchant for data visualisation and seems to be happily sliding
              more and more into web development. She loves being involved in
              projects from conception to full implementation and expands her
              skill base daily to fill out every crack in the design process.
            </Description>
          </Col>
          <Col>
            <ContactTitle>
              <b>Contact</b>
            </ContactTitle>
            <Contact>
              <img src="/email.svg" alt="howe.alanna[at]gmail[dot]com" />
            </Contact>
          </Col>
        </InnerCt>
      </Ct>
    );
  }
}

export default Header;

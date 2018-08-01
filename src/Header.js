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
  font-family: ${props => props.theme.fontHeader}, sans-serif;
  @media (max-width: 700px) {
    font-size: 21px;
  }
`;
const Subtitle = styled.div`
  font-size: 21px;
  line-height: 2;
  font-family: ${props => props.theme.fontHeader}, sans-serif;
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
  font-family: ${props => props.theme.fontHeader}, sans-serif;
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
            <Subtitle>UX / UI Design Consultant</Subtitle>
            <Description>
              Alanna is a web and graphic design professional with over seven 
              years experience designing websites, print assets and company
              branding. She's worked in-house and freelance and understands
              what's required to push projects to completion. She loves her work
              and takes every task seriously to ensure the best design for each
              individual product.
            </Description>
          </Col>
          <Col>
            <ContactTitle>
              <b>Contact</b>
            </ContactTitle>
            <Contact>
              <img src="email.svg" alt="howe.alanna[at]gmail[dot]com" />
            </Contact>
          </Col>
        </InnerCt>
      </Ct>
    );
  }
}

export default Header;

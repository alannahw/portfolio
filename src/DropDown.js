import React, { Component } from "react";
import styled from "styled-components";

const Ct = styled.div`
  border-radius: 3px;
  width: 250px;
  display: inline-block;
  background: white;
  cursor: pointer;
  text-align: left;
  @media (max-width: 700px) {
    width: 150px;
  }
`;
const Header = styled.div`
  width: 100%;
  padding: 10px 30px 6px 10px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition: color 0s;
  font-size: 14px;
  color: ${props => props.theme.text};
  position: relative;
  &::before {
    font-size: 14px;
    position: absolute;
    top: 13px;
    right: 15px;
    color: #aaa;
    font-family: "Ionicons";
    content: " \f3d0";
  }
  &:focus {
    outline: none;
  }

  @media (max-width: 700px) {
    font-size: 12px;
    &::before {
      top: 12px;
      right: 15px;
    }
  }
`;
const HeaderPart = styled.div`
  display: inline-block;
  margin: 0 1px;
  color: ${props => (props.clr ? props.clr : props.theme.main)};
`;
const Divider = styled.div`
  display: inline-block;
  margin: 0 5px;
  color: ${props => (props.clr ? props.clr : props.theme.main)};
`;
const Menu = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
  cursor: pointer;
  &:focus {
    pointer-events: none;
    outline: none;
  }
  ul {
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    list-style-type: none;
    padding-left: 0;
    min-width: 150px;
    background: #fff;
    border-radius: 5px;
  }
  li {
    width: 100%;
    color: ${props =>
      props.active === "true" ? props.theme.main : props.theme.text};
    &:first-child {
      color: ${props => props.theme.textlight2};
    }
  }
`;

const MenuBtn = styled.button`
  transition: background 0.3s;
  cursor: pointer;
  width: 100%;
  text-align: left;
  color: inherit;
  font-size: 14px;
  padding: 10px;
  border-radius: 3px;
  border: none;
  background: ${props => (props.active === "true" ? "#f7f7f7" : "#fff")};
  &:hover {
    background: #f7f7f7;
  }

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

const MenuContent = styled.div`
  cursor: pointer;
  position: absolute;
  top: 42px;
  left: 0px;
  z-index: 20;
  width: 250px;
  /* use opacity to fake immediate toggle */
  opacity: 0;
  visibility: hidden;

  border-radius: 3px;
  transition: visibility 0.8s, opacity 0.3s;
  ${Menu}:focus & {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  @media (max-width: 700px) {
    width: 200px;
  }
`;

class MenuItem extends Component {
  clickEvent = () => {
    this.props.handleOnClick(this.props.item);
  };
  render() {
    const { item, activeItemId } = this.props;
    return (
      <li>
        <MenuBtn
          id={item.id}
          onClick={this.clickEvent}
          active={item.id === activeItemId ? "true" : "false"}
        >
          {item.name}
        </MenuBtn>
      </li>
    );
  }
}

class Dropdown extends Component {
  render() {
    const {
      menuTitle,
      items,
      handleOnClick,
      activeItemId,
      showActiveName
    } = this.props;
    const title = menuTitle ? menuTitle : " ";
    const activeItem = items.find(i => i.id === activeItemId) || "";
    const active = showActiveName ? activeItem.name : "";
    return (
      <Ct>
        <Menu tabIndex="0">
          <Header>
            {!active ? (
              <HeaderPart clr="#aaa">{title}</HeaderPart>
            ) : (
              <HeaderPart>{active}</HeaderPart>
            )}
          </Header>
          <MenuContent>
            <ul>
              {items ? (
                items.map(i => (
                  <MenuItem
                    item={i}
                    handleOnClick={handleOnClick}
                    activeItemId={activeItemId}
                    key={`menuitem_${i.id}`}
                  />
                ))
              ) : (
                <span />
              )}
            </ul>
          </MenuContent>
        </Menu>
      </Ct>
    );
  }
}

export default Dropdown;

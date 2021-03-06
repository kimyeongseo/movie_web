import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(7, 7, 7, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "pink" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item>
        <SLink to="/" current={pathname === "/"}>
          Movies
        </SLink>
      </Item>
      <Item>
        <SLink to="/tv" current={pathname === "/tv"}>
          TV
        </SLink>
      </Item>
      <Item>
        <SLink to="/search" current={pathname === "/search"}>
          Search
        </SLink>
      </Item>
    </List>
  </Header>
));

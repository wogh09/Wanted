import React from "react";
import styled from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Nav() {
  return (
    <Wrapper>
      <NavContainer>
        <NavLeft>
          <HiOutlineMenu className="menu" />
          Wanted
        </NavLeft>
        <NavList>
          <NavItems>채용</NavItems>
          <NavItems>이벤트</NavItems>
          <NavItems>직군별 연봉</NavItems>
          <NavItems>이력서</NavItems>
          <NavItems>커뮤니티</NavItems>
          <NavItems>프리랜서</NavItems>
          <NavItems>Ai 합격예측</NavItems>
        </NavList>
        <NavAside>
          <IoIosSearch className="search" />
          <FaRegBell className="bell" />
          <FaUserCircle className="user" />
          <Service>기업 서비스</Service>
        </NavAside>
      </NavContainer>
    </Wrapper>
  );
}

export default Nav;
const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 0.1);
`;
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavLeft = styled.div`
  font-size: 17px;
  .menu {
    padding-right: 10px;
  }
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 14px;
  color: #333333;
  font-weight: bold;
  cursor: pointer;
`;
const NavItems = styled.li`
  padding-right: 15px;
  padding-left: 15px;
  color: #333333;
  font-weight: bold;
  cursor: pointer;
`;

const NavAside = styled.ul`
  display: flex;
  justify-content: center;
  .search {
    font-size: 18px;
    padding-right: 10px;
    padding-left: 10px;
  }
  .bell {
    font-size: 18px;
    padding-right: 10px;
    padding-left: 10px;
  }
  .user {
    font-size: 18px;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

const Service = styled.div`
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  font-size: 13px;
  margin-left: 15px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 10px;
`;

import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  height: 110px;
  background: rgb(185, 217, 235);
  background: radial-gradient(
    circle,
    rgba(185, 217, 235, 1) 0%,
    rgba(102, 153, 204, 1) 55%,
    rgba(102, 187, 204, 1) 100%
  );
  color: #fff; 
  z-index: 3; 
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Left = styled.div`
  margin-left: 30px;
  h1,
  h2 {
    font-family: "Amatic SC", cursive;
    font-weight: bold;
  }

  h1 {
    font-size: 42px;
  }

  h2 {
    font-size: 30x;
  }
`;

export const Menu = styled.section`
  display: flex;
  margin-left: 300px;
  z-index: 5;

  @media (max-width: 1059px) {
    flex-direction: column;
    align-items: center;
    background: #b1d2d7;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    margin-top: 0;
    top: 0;
    right: 0;
    height: 240px;
    width: 30%;
    padding: 10px;
    transition: transform 0.3s ease-in-out;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    li {
      margin-bottom: 30px;
      margin-left: 10px;

      @media (max-width: 638px) {
        font-size: 17px;
      }
    }

    @media (max-width: 638px) {
      width: 40%;
    }
  }
`;

export const Navbar = styled.div`
  font-weight: bold;
  display: flex;
  list-style: none;
  margin-right: 40px;

  @media (max-width: 1060px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }
`;

const activeClassName = "nav-item-active";
export const PageLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  margin-right: 20px;
  font-size: 25px;
  color: #fff;

  &.${activeClassName} {
    color: black;
  }

  &:hover {
    background: whitesmoke;
    transition: 0.3s ease;
  }
`;

export const IconContainer = styled.div`
  margin-left: 40px;
  .icon {
    margin-right: 20px;
    font-size: 30px;
    color: #000;

    @media (max-width: 677px) {
      font-size: 20px;
      margin-right: 10px;
    }
  }

  @media (max-width: 1020px) {
    margin: 10px;
  }
`;


export const Hamburger = styled.div`
  width: 3rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  border-radius: 5%;

   @media (max-width: 677px) {
    top: 10px;
    right: 10px;
  } 

  @media (min-width: 1060px) {
    display: none;
  }

  span {
    border-radius: 10px;
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#000" : "#fff")};
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }

    @media (min-width: 1060px) {
      display: none;
    }
  }
`;

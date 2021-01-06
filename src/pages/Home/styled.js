import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HomeText = styled.p`
  display: inline-block;
  color: var(--light-yellow);
  padding-right: 1.2%;
  cursor: pointer;
  z-index: 1;
  transition: opacity 0.2s ease-in-out;
  font-family: "fira-sans-thin", sans-serif;
  font-weight: 100 !important;
  opacity: ${props => (props.hovered ? "0.3" : "1")};
`;

const HoverLink = styled(NavLink)`
  transition: opacity 0.2s ease-in-out;
  opacity: ${props => (props.hovered ? "0.3" : "1")};
`;

const ExternalLink = styled.a`
  transition: opacity 0.2s ease-in-out;
  opacity: ${props => (props.hovered ? "0.3" : "1")};
`;

const HomeCircles = styled.div`
  width: 13.75%;
  position: relative;
  left: 5.625%;
  top: 35vh;
`;

const IntroText = styled.div`
  position: relative;
  left: 21.875%;
  width: 72%;
  font-size: 3.3vw;
  line-height: 1.3;
  top: 35vh;
  padding-top: 2%;
  & * {
    margin: 0 auto 0 auto;
  }
`;

const PortraitImg = styled.img`
  z-index: 1;
  width: 60%;
  position: absolute;
  left: 9%;
  margin-top: 18%;
  transition: display 0.2s ease-in-out;
  display: ${props => (props.hovered ? "none" : "block")};
`;

const CircleImg = styled.img`
  width: 88%;
  position: absolute;
  transition: display 0.2s ease-in-out;
  z-index: ${props =>
    props.color === "pink" ? "2" : props.color === "yellow" ? "0" : "-1"};
  display: ${props => (props.hovered ? "none" : "block")};
`;

const ShapeContainer = styled.div`
  position: fixed;
  bottom: ${props => (props.type !== "develop" && "-10px")};
  top: ${props => (props.type === "develop" && "-106px")};
  right: ${props => (props.type === "arts" && "-2px")};
  display: ${props => (props.hovered ? "block" : "none")};
`;

export {
  HomeText,
  HoverLink,
  ExternalLink,
  HomeCircles,
  IntroText,
  PortraitImg,
  CircleImg,
  ShapeContainer
};

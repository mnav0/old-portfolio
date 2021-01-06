import React from "react";
import { HoverText } from "./styled.js";

const HomeHover = ( props ) => {
  const { text, setHovered, setNotHovered } = props;

  return (
    <>
      <HoverText onMouseEnter={() => setHovered(text)}
    onMouseLeave={() => setNotHovered(text)} text={text}>
        {text}
      </HoverText>
    </>
  )
}

export { HomeHover }

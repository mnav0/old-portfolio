import React, { useState } from "react";
import "./styles.css";
import { HomeHover } from "../../components/HomeHover";
import { ReactComponent as DesignShape1 } from "../../assets/design1.svg";
import { ReactComponent as DevelopShape1 } from "../../assets/develop1.svg";
import { ReactComponent as ArtsShape1 } from "../../assets/arts1.svg";
import pinkCircle from "../../assets/logo-lg-pink.png";
import yellowCircle from "../../assets/logo-lg-yellow.png";
import blueCircle from "../../assets/logo-lg-blue.png";
import drawing from "../../assets/profile-drawing.png";
import {
  HomeText,
  HoverLink,
  ExternalLink,
  HomeCircles,
  IntroText,
  PortraitImg,
  CircleImg,
  ShapeContainer
} from "./styled.js";

const Home = () => {
  const [hoverDesign, setHoverDesign] = useState(false);
  const [hoverDevelop, setHoverDevelop] = useState(false);
  const [hoverArts, setHoverArts] = useState(false);

  const setHovered = type => {
    type === "UI/UX designer"
      ? setHoverDesign(true)
      : type === "front-end developer"
      ? setHoverDevelop(true)
      : type === "fine arts" && setHoverArts(true);
  };

  const setNotHovered = type => {
    type === "UI/UX designer"
      ? setHoverDesign(false)
      : type === "front-end developer"
      ? setHoverDevelop(false)
      : type === "fine arts" && setHoverArts(false);
  };

  return (
    <>
      <HomeCircles>
        <PortraitImg
          src={drawing}
          alt="Portrait drawing"
          hovered={hoverDesign || hoverDevelop || hoverArts}
        />
        <CircleImg
          src={pinkCircle}
          alt="Pink circle"
          color="pink"
          hovered={hoverDesign || hoverArts}
        />
        <CircleImg
          src={yellowCircle}
          alt="Yellow circle"
          color="yellow"
          hovered={hoverDevelop || hoverArts}
        />
        <CircleImg
          src={blueCircle}
          alt="Blue circle"
          color="blue"
          hovered={hoverDesign || hoverDevelop}
        />
      </HomeCircles>

      <IntroText>
        <HomeText hovered={hoverDesign || hoverArts || hoverDevelop}>
          A
        </HomeText>

        <HoverLink to="/design" hovered={hoverArts || hoverDevelop}>
          <HomeHover
            setHovered={setHovered}
            setNotHovered={setNotHovered}
            text="UI/UX designer"
          />
        </HoverLink>

        <HomeText hovered={hoverDesign || hoverArts || hoverDevelop}>
          and
        </HomeText>

        <HoverLink to="/develop" hovered={hoverDesign || hoverArts}>
          <HomeHover
            setHovered={setHovered}
            setNotHovered={setNotHovered}
            text="front-end developer"
          />
        </HoverLink>

        <HomeText hovered={hoverDesign || hoverArts || hoverDevelop}>
          with a background in
        </HomeText>

        <ExternalLink
          href="https://www.instagram.com/mnclaire/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          hovered={hoverDesign || hoverDevelop}
        >
          <HomeHover
            setHovered={setHovered}
            setNotHovered={setNotHovered}
            text="fine arts"
          />
        </ExternalLink>

        <HomeText hovered={hoverDesign || hoverArts || hoverDevelop}>
          .
        </HomeText>
      </IntroText>

      <ShapeContainer type="design" hovered={hoverDesign}>
        <DesignShape1 />
      </ShapeContainer>

      <ShapeContainer type="develop" hovered={hoverDevelop}>
        <DevelopShape1 />
      </ShapeContainer>

      <ShapeContainer type="arts" hovered={hoverArts}>
        <ArtsShape1 />
      </ShapeContainer>
    </>
  );
};

export default Home;

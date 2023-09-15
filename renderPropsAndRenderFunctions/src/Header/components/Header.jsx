import React from "react";

import Icon from "@header/components/Icon";

import moonIcon from "@assets/images/icon-moon.svg";
import sunIcon from "@assets/images/icon-sun.svg";

import "@styles/components/Header.styl";

import { useTheme } from "../hooks/useTheme";
import Title from "./Title";
import Wrapper from "../containers/Wrapper";

const Header = () => {
  const { currentTheme, switchTheme } = useTheme();
  const iconConfig = {
    class: {
      wrapper: "header--icon",
      image: "header--icon__image",
    },
    icon: sunIcon,
    alt: "Switch theme",
  };

  currentTheme === "dark"
    ? (iconConfig.icon = sunIcon)
    : (iconConfig.icon = moonIcon);

  return (
    <Wrapper section="header" wrapper="header--wrapper">
      <Title class="header--title" title="todo" />
      <Icon config={iconConfig} clickHandler={switchTheme} />
    </Wrapper>
  );
};

export default Header;

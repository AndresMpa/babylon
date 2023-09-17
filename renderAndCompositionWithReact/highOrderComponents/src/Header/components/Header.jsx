import React from "react";

import Icon from "@header/components/Icon";
import Title from "@header/components/Title";

import Wrapper from "@header/containers/Wrapper";

import moonIcon from "@assets/images/icon-moon.svg";
import sunIcon from "@assets/images/icon-sun.svg";

import "@styles/components/Header.styl";

import { useTheme } from "../hooks/useTheme";

const Header = (props) => {
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
    <Wrapper
      section="header"
      wrapper="header--wrapper"
      renderTitle={() => <Title class="header--title" title={props.title} />}
      renderIcon={() => <Icon config={iconConfig} clickHandler={switchTheme} />}
    />
  );
};

export default Header;

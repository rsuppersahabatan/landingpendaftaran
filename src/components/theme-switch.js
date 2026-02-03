import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../context/theme-context";
import styled from "styled-components";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <StyledThemeSwitch>
      <DarkModeSwitch checked={isDark} size={20} onChange={toggleTheme} />
    </StyledThemeSwitch>
  );
};

export default ThemeSwitch;

const StyledThemeSwitch = styled.div`
  display: flex;
`;

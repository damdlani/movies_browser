import React from "react";
import { useState, useEffect } from "react";
import { HamburgerMenu, Bar, MenuBar, MenuBackground } from "./styled";
import { Nav } from "../Header/Menu/Navigation";
import { GoTopButton } from "../Header/Menu/Navigation/styled";
import { useDispatch } from "react-redux";
import { setFocusOnSearch } from "../../features/movies/MoviesPopular/moviesSlice";

export const Hamburger = ({ position }) => {
  const [menuDisplayed, setMenuDisplayed] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (position === "top") {
      setMenuDisplayed(false);
    }
  }, [position]);

  const onClickMenu = () => {
    setMenuDisplayed(!menuDisplayed);
  };

  const focusOnSearch = () => {
    dispatch(setFocusOnSearch(true));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <MenuBar position={position}>
        <HamburgerMenu
          position={position}
          showMenu={menuDisplayed}
          onClick={onClickMenu}
        >
          <Bar showMenu={menuDisplayed} bar1 />
          <Bar showMenu={menuDisplayed} bar2 />
          <Bar showMenu={menuDisplayed} bar3 />
        </HamburgerMenu>
        <GoTopButton showMenu={menuDisplayed} onClick={focusOnSearch}>
          SEARCH
        </GoTopButton>
        <Nav showMenu={menuDisplayed} />
      </MenuBar>
      <MenuBackground showMenu={menuDisplayed} position={position} />
    </>
  );
};

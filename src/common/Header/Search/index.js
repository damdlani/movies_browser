import React, { useEffect, useState } from "react";
import {useLocation} from "react-router-dom"
import { useOnSearchInputChange } from "../../../hooks/useOnSearchInputChange";
import searchIcon from "../../../images/search.png";
import { Input, SearchBox, SearchIcon } from "./styled";

const Search = ({showMenu}) => {
  const location = useLocation();
  const queryInUrl = new URLSearchParams(location.search).get("query") || "";

  const [inputValue, setInputValue] = useState(queryInUrl);

  useEffect(() => {
    setInputValue(queryInUrl);
  }, [queryInUrl]);

  const onSearchInputChange = useOnSearchInputChange(setInputValue);

  const isSearchForPeople = location.pathname.includes("/people");

  return (
      <SearchBox showMenu={showMenu}>
        <SearchIcon src={searchIcon}/>
        <Input placeholder={`Search for ${isSearchForPeople ? "people" : "movies"}...`} value={inputValue}
               onChange={({target: {value}}) => onSearchInputChange({newValue: value, isSearchForPeople})}/>
      </SearchBox>
  )
};

export default Search;
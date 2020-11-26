import { useRef } from "react";
import {useHistory} from "react-router-dom";
import { buildQueryString } from "../lib/buildQueryString";

export const useOnSearchInputChange = setInputValue => {
  const timeoutRef = useRef();
  const history = useHistory();

  return({newValue, isSearchForPeople}) => {
    clearTimeout(timeoutRef.current);
    setInputValue(newValue);

    timeoutRef.current = setTimeout(() => {
      history.push({
        pathname: isSearchForPeople ? "/people" : "/movies",
        search: buildQueryString({query: newValue || undefined}),
      });
    }, 200);
  };
};
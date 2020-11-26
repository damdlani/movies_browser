import React from "react";
import { Title } from "../../common/Title";
import noResultPicture from "../../images/noResult.png"
import { Image } from "./styled"
import { useSelector } from "react-redux";

export const NoResult = ({selectors}) => {
  const query = useSelector(selectors.selectQuery());

  return (
      <>
        <Title title={`Sorry, there are no results for "${query}"`}/>
        <Image src={noResultPicture} alt=""/>
      </>
  )
};
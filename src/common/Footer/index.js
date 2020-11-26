import React from "react";
import { BackButton } from "./BackButton";
import { NextButton } from "./NextButton";
import { Number, Pagination, Text } from "./styled";
import { useGoToPage } from "../../hooks/useGoToPage";

export const Footer = ({page, totalPages}) => {
  const goToPage = useGoToPage();
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
      <Pagination>
        <BackButton
            page={page}
            goToPage={goToPage}
            isFirstPage={isFirstPage}
            firstTitle="First"
            secondTitle="Previous"
        />
        <Text>Page <Number>{page}</Number> of <Number>{totalPages}</Number></Text>
        <NextButton
            page={page}
            totalPages={totalPages}
            goToPage={goToPage}
            firstTitle="Next"
            secondTitle="Last"/>
      </Pagination>
  )
};
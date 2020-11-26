import React from "react";
import active from "../../images/active.svg"
import disabled from "../../images/disabled.svg"
import { Arrow, ChangePageButton, ButtonTitle } from "./styled";

export const BackButton = ({isFirstPage, goToPage, page, firstTitle, secondTitle}) => {

  return (
      <>
            <ChangePageButton
                onClick={() => {goToPage(1)}}
                disabled={isFirstPage}
            >
              {isFirstPage ?
                  <>
                    <Arrow hidden src={disabled}/>
                    <Arrow directionChange src={disabled}/>
                  </>
                  :
                  <>
                    <Arrow back hidden src={active}/>
                    <Arrow directionChange back src={active}/>
                  </>
              }
              <ButtonTitle directionChange="left" inactive={isFirstPage}>
                {firstTitle}
              </ButtonTitle>
            </ChangePageButton>
            <ChangePageButton
                onClick={() => goToPage(page - 1)}
                directionChange
                disabled={isFirstPage}
            >
              {isFirstPage ?
                  <Arrow src={disabled}/>
                  :
                  <Arrow back src={active}/>
              }
              < ButtonTitle directionChange="left" inactive={isFirstPage}>
                {secondTitle}
              </ButtonTitle>
            </ChangePageButton>
          </>
  )
};
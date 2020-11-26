import React from "react";
import disabled from "../../images/disabled.svg";
import active from "../../images/active.svg";
import {Arrow, ChangePageButton, ButtonTitle} from "./styled";

export const NextButton = ({totalPages, goToPage, page, firstTitle, secondTitle}) => {
    return (
            <>
                <ChangePageButton
                    onClick={() => goToPage(page+1)}
                    disabled={page === totalPages}
                >
                    <ButtonTitle
                        inactive={page === totalPages}
                        directionChange="right"
                    >
                        {firstTitle}
                    </ButtonTitle>
                    {page === totalPages ?
                        <Arrow back src={disabled}/>
                        :
                        <Arrow src={active}/>
                    }
                </ChangePageButton>
                <ChangePageButton
                    onClick={() => goToPage(totalPages)}
                    directionChange
                    disabled={page === totalPages}
                >
                    <ButtonTitle
                        inactive={page === totalPages}
                        directionChange="right"
                    >
                        {secondTitle}
                    </ButtonTitle>
                    {page === totalPages ?
                        <>
                            <Arrow back src={disabled}/>
                            <Arrow directionChange back hidden src={disabled}/>
                        </>
                        :
                        <>
                            <Arrow src={active}/>
                            <Arrow directionChange hidden src={active}/>
                        </>
                    }
                </ChangePageButton>
            </>
    )
};
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Image = styled.img`
  margin: 180px auto 0;
`;

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
`;

export const AdditionalInfo = styled.h2`
  margin: 0 auto 24px;
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  line-height: 1.3;
  color: ${({theme}) => theme.color.woodsmoke};
`;

export const StyledNavLink = styled(NavLink).attrs()`
  margin: 0 auto;
  max-width: 190px;
  padding: 16px 24px;
  text-decoration: none;
  background-color: ${({theme}) => theme.color.blue};
  border-radius: 5px;
  color: ${({theme}) => theme.color.white};
  font-size: 14px;
  line-height: 19px;
  
    &:hover {
      transition: 1s;
      filter: brightness(120%);
    }
`;
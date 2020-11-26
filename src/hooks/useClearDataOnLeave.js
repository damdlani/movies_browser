import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const useClearDataOnLeave = ({ clearAction }) => {
  const dispatch = useDispatch;

  useEffect(() => {
    return() => dispatch(clearAction());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
};
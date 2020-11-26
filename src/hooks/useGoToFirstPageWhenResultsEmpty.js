import {useGoToPage} from "./useGoToPage";

const { useEffect} = require("react");

export const useGoToFirstPageWhenResultsEmpty = ({status, moviesResult, page}) => {
  const goToPage = useGoToPage();

  useEffect(() => {
    if(status === "success" && moviesResult.length === 0 && page !==1){
      goToPage(1)
    }
  }, [status, moviesResult, page, goToPage]);
};
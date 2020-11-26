import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { useSelector } from "react-redux";
import { actions, selectors } from "../MoviesPopular/moviesSlice";
import { Tile } from "../../../common/Tile";
import { getProductionYear } from "../../../lib/utils";
import spinner from "../../../images/icon-spinner.svg";
import { ListContainer, Wrapper } from "../../../common/Containers/styled";
import { useFetchDataOnLocationSearchChange } from "../../../hooks/useFetchDataQueryChange";
import { useClearDataOnLeave } from "../../../hooks/useClearDataOnLeave";
import { useGenres } from "../../../hooks/useGenres";
import { Title } from "../../../common/Title";
import { NoResult } from "../../../common/NoResult";
import { GoTopButton } from "../../../common/Header/Menu/Navigation/styled";
import { Footer } from "../../../common/Footer";
import { Error } from "../../../common/Error";
import { Spinner, SpinnerBox } from "../../../common/Spinner/styled";

export const MoviesPage = () => {
  const status = useSelector(selectors.selectStatus);
  const moviesResult = useSelector(selectors.selectResults);
  const resultsEmpty = useSelector(selectors.selectResultsEmpty);
  const pagination = useSelector(selectors.selectPagination);
  const query = useSelector(selectors.selectQuery);
  const getMovieGenres = useGenres();

  useFetchDataOnLocationSearchChange({fetchAction: actions.fetch});

  useClearDataOnLeave({clearAction: actions.clear});

  const [position, setPosition] = useState("hideButton");

  useEffect(() => {
    document.addEventListener("scroll", e => {
      let pagePosition = document.scrollingElement.scrollTop;
      if (pagePosition >= 850) {
        setPosition("showButton")
      } else {
        setPosition("hideButton")
      }
    })
  }, []);

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const renderLoading = () => {
      return (
          <>
              {query && (<Title title={`Search results for "${query}"`}/>)}
              <SpinnerBox>
                  <Spinner src={spinner} />
              </SpinnerBox>
          </>
      )
  };

  const renderSuccess = () => {
      return (
          <>
              {resultsEmpty
                  ? <NoResult/>
                  :
                  <FadeIn delay={50} transitionDuration={300}>
                      <Title
                          title={(!query || query.trim() === "") ? "Popular movies" : `Search results for "${query}" (${pagination.totalResults})`}/>
                      <ListContainer DataType={"movie"}>
                          {moviesResult?.map((result) => (
                              <Tile key={result.id} id={result.id} tileType={"movie"} tileView={"list"} header={result.title}
                                    subheader={getProductionYear(result.release_date)} image={result.poster_path}
                                    date={result.release_date} genres={getMovieGenres(result.genre_ids)}
                                    rateValue={result.vote_average} votesNumber={result.vote_count}
                                    description={result.overview}/>
                          ))}
                      </ListContainer>
                      <GoTopButton position={position} title="Scroll to the top" onClick={scrollTop}>
                          ^
                      </GoTopButton>
                      <Footer page={pagination.page} totalPages={pagination.totalPages}/>
                  </FadeIn>
              }
          </>
      )
  };

  const renderError = () => {
      return (
          <Error/>
      )
  };

  const chooseWhatToRender = () => {
      switch(status) {
          case "loading":
              return renderLoading();
          case "success": {
              return renderSuccess();
          }
          default:
              return renderError();
      }
  };

  return (
      <Wrapper>
        {chooseWhatToRender() }
      </Wrapper>
  )
};
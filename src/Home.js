import { useEffect, useState } from "react";
import { getMovie } from "./api";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

const Banner = styled.div`
  height: 80vh;
  background-color: lightgray;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 100px;
`;

const Con = styled.div``;

const Home = () => {
  const [movieData, setMovieData] = useState();
  const [resultData, setResultData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const result = await getMovie(1);
        console.log(result);
        setResultData(result);
        setMovieData(result.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const fetchData = async () => {
    try {
      let page = (resultData.page += 1);
      if (resultData.page <= resultData.total_pages) {
        const { results } = await getMovie(page);
        setMovieData(movieData.concat(results));
      }
    } catch (error) {}
  };

  return (
    <div>
      {movieData && (
        <>
          <Banner>영화 배너 섹션</Banner>

          <Container>
            <InfiniteScroll
              dataLength={movieData.length}
              next={fetchData}
              hasMore={true}
            >
              <div>
                {movieData?.map((data) => (
                  <Con key={data.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                      alt={data.title}
                    />
                  </Con>
                ))}
              </div>
            </InfiniteScroll>
          </Container>
        </>
      )}
    </div>
  );
};

export default Home;

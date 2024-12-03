const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjMzMzA4YTJmMGJiMTY0ZTJhZDEwNTE0YWIzMDg2ZiIsInN1YiI6IjYwMmY2YjZiNjRmNzE2MDA0MDU2MjYwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JE4tOx9I0MNBy3X-AGsUPZztvJTSo5edEt8HHbIY8go",
  },
};

export const getMovie = (pageId) => {
  const url = baseUrl + `movie/now_playing?language=ko-kr&page=${pageId}`;
  return fetch(url, options).then((res) => res.json());
};

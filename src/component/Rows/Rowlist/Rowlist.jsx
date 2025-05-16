import React from 'react';
import Row from "../Row/Row";
import requests from "../../Utils/rquests"

const Rowlist =() =>{
  return (
    <>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title="NetflixOriginals" fetchUrl={requests.fetchTrending} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    <Row title="TvShow"fetchUrl={requests.fetchTvShow}/>
  </>
);
}

export default Rowlist;
import React from 'react';
import { Main, Row } from '../components';
import API_REQUESTS from '../Requests';

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowId='1' title="Trending" fetchURL={API_REQUESTS.requestTrending} />
        <Row rowId='2' title="Upcoming" fetchURL={API_REQUESTS.requestTopUpcoming} />
        <Row rowId='3' title="Top Rated" fetchURL={API_REQUESTS.requestTopRated} />
        <Row rowId='4' title="Sci Fi" fetchURL={API_REQUESTS.requestSciFi} />
        <Row rowId='5' title="War" fetchURL={API_REQUESTS.requestWar} />
        <Row rowId='6' title="Crime" fetchURL={API_REQUESTS.requestCrime} />
        <Row rowId='7' title="Animation" fetchURL={API_REQUESTS.requestAnimation} />
        <Row rowId='8' title="Horror" fetchURL={API_REQUESTS.requestHorror} />
        <Row rowId='9' title="Comedy" fetchURL={API_REQUESTS.requestComedy} />
        <Row rowId='10' title="Drama" fetchURL={API_REQUESTS.requestDrama} />
        <Row rowId='11' title="Adventure" fetchURL={API_REQUESTS.requestAdventure} />
    </div>
  )
}

export default Home;
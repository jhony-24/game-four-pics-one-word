import React, { lazy } from 'react';
import LazyLoad from 'src/components/hoc/LazyLoad';
import NewWordToPlay from './NewWordToPlay';
import HeaderDiscoverWord from './DiscoverWord/dependencies/headerDiscover/HeaderDiscoverWord';
import Loading from 'src/components/atoms/Loading/Loading';
import Position from 'src/components/dom/Position';

const DiscoverWord = lazy(() => import("./DiscoverWord"));

const ViewGuessWord = (props) => {
  const { state } = props;
  return (
    <div className="guess-word">
      <HeaderDiscoverWord />
      <LazyLoad component={DiscoverWord} state={state} loading={
        <Position margin="2in auto">
          <Loading />
        </Position>
      } />
      <NewWordToPlay />
    </div>
  )
}

export default ViewGuessWord;

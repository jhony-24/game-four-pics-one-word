import React, { lazy } from 'react';
import LazyLoad from 'src/components/hoc/LazyLoad';
import NewWordToPlay from './NewWordToPlay';
import HeaderDiscoverWord from './DiscoverWord/dependencies/headerDiscover/HeaderDiscoverWord';

const DiscoverWord = lazy(() => import("./DiscoverWord"));

const ViewGuessWord = (props) => {
  const { state } = props;
  return (
    <div className="guess-word">
      <HeaderDiscoverWord />
      <LazyLoad component={DiscoverWord} state={state} />
      <NewWordToPlay />
    </div>
  )
}

export default ViewGuessWord;

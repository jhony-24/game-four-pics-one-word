import React, { lazy } from 'react';
import LazyLoad from 'src/components/hoc/LazyLoad';
import NewWordToPlay from './NewWordToPlay';
import HeaderDiscoverWord from './DiscoverWord/HeaderDiscover/HeaderDiscoverWord';
import Loading from 'src/components/atoms/Loading/Loading';
import SWrapperFlex from 'src/components/styled/wrappers/SWrapperFlex';

const DiscoverWordAsync = lazy(() => import("./DiscoverWord"));

const ViewDiscoverWord = ({state}) => {
  return (
    <div className="guess-word">
      <HeaderDiscoverWord />
      <LazyLoad component={DiscoverWordAsync} state={state} loading={
        <SWrapperFlex $style={{margin:"1in auto"}} >
          <Loading />
        </SWrapperFlex>
      } />
      <NewWordToPlay />
    </div>
  )
}

export default ViewDiscoverWord;

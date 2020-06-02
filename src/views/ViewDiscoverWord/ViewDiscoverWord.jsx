import React, { lazy } from 'react';
import RowItem from "src/components/molecules/RowItem"
import { css } from 'aphrodite/no-important';
import IconNatural from "src/components/atoms/IconNatural"
import style from './style';
import { IoMdStar } from "react-icons/io"
import LazyLoad from 'src/components/hoc/LazyLoad';
import ButtonBack from 'src/components/molecules/ButtonBack';
import NewWordToPlay from './NewWordToPlay';

const DiscoverWord = lazy(() => import("./DiscoverWord"))

const ViewGuessWord = (props) => {
  const { state } = props;
  const { points } = state;
  return (
    <div className="guess-word">
      <RowItem
        styles={style.header}
        leftBody={
          <ButtonBack color="white" />
        }
        centerBody={
          <p className={(css.textHeader)}>Jugando</p>
        }
        rightBody={
          <IconNatural
            icon={<IoMdStar size={20} />}
            text={points.toString()}
            colortext="white"
            coloricon="yellow" />
        } />

      <LazyLoad component={DiscoverWord} state={state} />
      <NewWordToPlay />
    </div>
  )
}

export default ViewGuessWord;

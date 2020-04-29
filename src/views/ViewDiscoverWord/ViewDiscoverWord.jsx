import React, { lazy } from 'react';
import RowItem from "src/components/molecules/RowItem"
import { css } from 'aphrodite/no-important';
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import IconNatural from "src/components/atoms/IconNatural"
import style from './style';
import { IoMdStar } from "react-icons/io"
import LazyLoad from 'src/hoc/LazyLoad';
import ButtonBack from 'src/components/molecules/ButtonBack';


const DiscoverWord = lazy(() => import("src/containers/DiscoverWord"))



const ViewGuessWord = (props) => {

  const { state } = props;
  const header = { ...style.header._definition };
  const textHeader = css(style.textHeader);

  const { points } = state;

  return (
    <div className="guess-word">
      <RowItem
        styles={header}
        leftBody={
          <ButtonBack color="white" />
        }
        centerBody={
          <p className={textHeader}>Jugando</p>
        }
        rightBody={
          <IconNatural
            icon={<IoMdStar size={20} />}
            text={points.toString()}
            colortext="white"
            coloricon="yellow" />
        } />

      <CircleImageSquare images={state.images} styles={{ ...style.squareImage._definition }} />
      <LazyLoad component={DiscoverWord} state={state} />
    </div>
  )

}




export default ViewGuessWord;

import React, { lazy } from 'react';
import RowItem from "src/components/molecules/RowItem"
import { css } from 'aphrodite/no-important';
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import IconNatural from "src/components/atoms/IconNatural"
import style from './style';
import { IoIosArrowBack, IoMdStar } from "react-icons/io"
import { TEXT_PRIMARY } from "src/tools/constants"
import LazyLoad from 'src/hoc/LazyLoad';
import { AiOutlineSync } from 'react-icons/ai';


const DiscoverWord = lazy(() => import("src/containers/DiscoverWord"))



const ViewGuessWord = (props) => {

  const { state } = props;
  const header = { ...style.header._definition };
  const textHeader = css(style.textHeader);
  const colorIcon = TEXT_PRIMARY;

  const { points } = state;

  return (
    <div className="guess-word">
      <RowItem
        styles={header}
        leftBody={
          <span onClick={() => window.history.back()}>
            <IconNatural icon={<IoIosArrowBack color={colorIcon} size={20} />} />
          </span>
        }
        centerBody={
          <p className={textHeader}>Jugando</p>
        }
        rightBody={
          <IconNatural
            icon={<IoMdStar size={20} />}
            text={points}
            colortext="white"
            coloricon="yellow" />
        } />

      <CircleImageSquare images={state.images} styles={{ ...style.squareImage._definition }} />
      <LazyLoad component={DiscoverWord} state={state} />
    </div>
  )

}




export default ViewGuessWord;

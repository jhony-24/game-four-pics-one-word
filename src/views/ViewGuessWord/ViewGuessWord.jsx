import React, { lazy } from 'react';
import RowItem from "src/components/molecules/RowItem"
import { css } from 'aphrodite/no-important';
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import IconNatural from "src/components/atoms/IconNatural"
import style from './style';
import { IoIosArrowBack, IoMdNotifications } from "react-icons/io"
import { TEXT_PRIMARY } from "src/tools/constants"
import LazyLoad from 'src/hoc/LazyLoad';


const DiscoverWord = lazy(() => import("src/containers/DiscoverWord"))



const ViewGuessWord = (props) => {

  const { state } = props;
  const header = { ...style.header._definition };
  const textHeader = css(style.textHeader);
  const colorIcon = TEXT_PRIMARY;

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
          <marquee className={textHeader}>descubrir palabra...</marquee>
        }
        rightBody={
          <span>
            <IconNatural icon={<IoMdNotifications color={colorIcon} size={20} />} />
          </span>
        } />

      <CircleImageSquare images={state.images} styles={{ ...style.squareImage._definition }} />
      <LazyLoad component={DiscoverWord} state={state} />
    </div>
  )

}




export default ViewGuessWord;

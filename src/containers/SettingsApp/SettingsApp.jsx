import React, { Component, Fragment } from 'react';
import { IoIosMoon, IoIosMusicalNote, IoIosText } from 'react-icons/io';
import TextField from 'src/components/atoms/TextField';
import ToggleSwitch from 'src/components/atoms/ToggleSwitch/ToggleSwitch';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Paragraph from 'src/components/molecules/Paragraph';
import RowItem from "src/components/molecules/RowItem"
import { css } from 'aphrodite/no-important';
import style from './style';


class SettingsApp extends Component {
  render() {
    return (
      <Fragment>
        <RowItem
          styles={style.item._definition}
          leftBody={<Avatar src="https://image.shutterstock.com/image-photo/casually-handsome-confident-young-man-260nw-439433326.jpg" />}
          centerBody={
            <div className={css(style.ctnParagraph)}>
              <Paragraph
                title="Jhony vega cuya"
                detail={`10 publicaciones`} />
            </div>
          }
        />

        <RowItem
          styles={style.item._definition}
          leftBody={<Avatar color="rgb(60,60,60)" icon={<IoIosMoon color="white" />} />}
          centerBody={
            <div className={css(style.ctnParagraph)}>
              <Paragraph title="dark mode" detail="cambiar la apariencia" colordetail="gray" />
            </div>
          }
          rightBody={<ToggleSwitch />}
        />

        <RowItem
          styles={style.item._definition}
          leftBody={<Avatar color="orange" icon={<IoIosMusicalNote color="white" />} />}
          centerBody={
            <div className={css(style.ctnParagraph)}>
              <Paragraph title="active sounds" detail="administra los sonidos generales" colordetail="gray" />
            </div>
          }
          rightBody={<ToggleSwitch />}
        />
        <RowItem
          styles={style.item._definition}
          leftBody={<Avatar color="rgb(30,130,230)" icon={<IoIosText color="white" />} />}
          centerBody={
            <div className={css(style.ctnParagraph)}>
              <Paragraph
                title="Cambiar mi nombre"
                detail="tener nuevo nombre de usuario" colordetail="gray" />
            </div>
          }
        />
      </Fragment>
    )
  }
}

export default SettingsApp;

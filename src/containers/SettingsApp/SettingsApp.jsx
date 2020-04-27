import React, { Component, Fragment } from 'react';
import { IoIosMoon, IoIosMusicalNote, IoIosText } from 'react-icons/io';
import TextField from 'src/components/atoms/TextField';
import ToggleSwitch from 'src/components/atoms/ToggleSwitch/ToggleSwitch';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Paragraph from 'src/components/molecules/Paragraph';
import RowItem from "src/components/molecules/RowItem"
import style from './style';
import Container from 'src/components/dom/Container';
import RowSetting from './suubcomponents/RowSetting';
import Text from 'src/components/atoms/Text/Text';


class SettingsApp extends Component {
  render() {
    return (
      <Fragment>
        <RowSetting
          title="jhony vega cuya"
          detail={<Text color="black">10 publicaciones</Text>}
          src="https://cdn.pixabay.com/photo/2020/04/21/10/26/animal-5072537__340.jpg"
        />
        <RowSetting
          title="dark mode"
          detail="cambiar la apariencia"
          bgIcon="rgb(60,60,60)"
          icon={<IoIosMoon color="white" />}
          rightBody={<ToggleSwitch />}
        />
        <RowSetting
          title="active sounds"
          detail="administra los sonidos generales"
          bgIcon="orange"
          icon={<IoIosMusicalNote color="white" />}
          rightBody={<ToggleSwitch />}
        />
        <RowSetting
          title="change my name"
          detail="tener nuevo nombre de usuario"
          bgIcon="rgb(30,130,230)"
          icon={<IoIosText color="white" />}
          rightBody={<ToggleSwitch />}
        />

      </Fragment>
    )
  }
}

export default SettingsApp;

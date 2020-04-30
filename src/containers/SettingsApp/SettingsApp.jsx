import React, { Component, Fragment } from 'react';
import { IoIosMoon, IoIosMusicalNote, IoIosText } from 'react-icons/io';
import ToggleSwitch from 'src/components/atoms/ToggleSwitch/ToggleSwitch';
import RowSetting from './subcomponents/RowSetting';
import Text from 'src/components/atoms/Text/Text';
import BottomSheet from 'src/components/molecules/BottomSheet/BottomSheet';

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
        <BottomSheet/>
      </Fragment>
    )
  }
}

export default SettingsApp;

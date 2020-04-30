import React, { Component, Fragment } from 'react';
import RowSetting from './subcomponents/RowSetting';
import Text from 'src/components/atoms/Text/Text';
import RowDarkMode from './subcontainers/RowDarkMode';
import RowSoundActive from './subcontainers/RowSoundActive';
import RowRename from './subcontainers/RowRename';

class SettingsApp extends Component {
  render() {
    return (
      <Fragment>
        <RowSetting
          title="jhony vega cuya"
          detail={<Text color="black">10 publicaciones</Text>}
          src="https://cdn.pixabay.com/photo/2020/04/21/10/26/animal-5072537__340.jpg"
        />
        <RowDarkMode/>
        <RowSoundActive/>
        <RowRename/>
      </Fragment>
    )
  }
}

export default SettingsApp;

import React, { Component, Fragment } from 'react';
import RowSetting from './subcomponents/RowSetting';
import Text from 'src/components/atoms/Text/Text';
import RowSoundActive from './subcontainers/RowSoundActive';
import RowRename from './subcontainers/RowRename';
import { connect } from 'react-redux';
import { userSelectors, userActions } from 'src/ducks/user';

class SettingsApp extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.getUser());
  }

  render() {
    const { username } = this.props;

    return (
      <Fragment>
        <RowSetting
          title={username}
          detail={<Text color="black">10 publicaciones</Text>}
          src="https://cdn.pixabay.com/photo/2020/04/21/10/26/animal-5072537__340.jpg"
        />
        <RowSoundActive />
        <RowRename defaultUsername={username} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  username: userSelectors.getUsername(state)
})
export default connect(mapStateToProps)(SettingsApp);

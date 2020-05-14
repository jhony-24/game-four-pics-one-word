import React, { Component, Fragment } from 'react';
import RowSoundActive from './subcontainers/RowSoundActive';
import RowRename from './subcontainers/RowRename';
import { connect } from 'react-redux';
import { userSelectors, userActions } from 'src/redux/user';
import HeaderSettings from './subcomponents/HeaderSettings';
import RowPassword from './subcontainers/RowPassword';
import GraphicProgressPointStatistical from 'src/components/molecules/GraphicProgressPointStatistical';

class SettingsApp extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.getUser());
  }

  render() {
    const { username } = this.props;

    return (
      <Fragment>
        <HeaderSettings
          title={username || ""}
          details={"10 publicaciones"}
          avatar="https://cdn.pixabay.com/photo/2020/04/21/10/26/animal-5072537__340.jpg" />
        <GraphicProgressPointStatistical/>
        <RowSoundActive />
        <RowRename defaultUsername={username} />
        <RowPassword/>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  username: userSelectors.getUsername(state)
})
export default connect(mapStateToProps)(SettingsApp);

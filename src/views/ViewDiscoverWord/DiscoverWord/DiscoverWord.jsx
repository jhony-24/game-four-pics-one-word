import React, { Component } from 'react';
import Flex from "src/components/dom/Flex"
import { connect } from 'react-redux';
import FlatMessage from "src/components/molecules/FlatMessage";
import MessUpLetters from './dependencies/modifyLetters/MessUpLetters.sub';
import TestLetters from './dependencies/modifyLetters/TestLetters.sub';
import GameSuccess from "./dependencies/success/GameSuccess";
import style from './style';
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import { discoverActions, discoverSelectors } from "src/redux/discover";
import { userSelectors } from 'src/redux/user';

class DiscoverWord extends Component {

  componentWillMount() {
    this.props.dispatch(discoverActions.createLettersToDiscover(this.props.state));
  }

  render() {
    const { stateDiscover, images, idWord, idUser } = this.props;
    if (stateDiscover) {
      return <GameSuccess idWord={idWord} idUser={idUser} />
    }
    else {
      return (
        <Flex styles={style.flexDiscover}>
          <CircleImageSquare images={images} styles={style.squareImage} />
          <TestLetters />
          <FlatMessage verticalMargin={25} text="Elige las letras correctas y descubre la palabra" />
          <MessUpLetters />
        </Flex>
      )
    }
  }
}

const mapStateToProps = ({ discover, user }) => ({
  stateDiscover: discover.stateDiscover,
  idWord: discoverSelectors.getIdWord(discover),
  idUser: userSelectors.getIdUser(user),
  images: discover.wordData !== null ? discover.wordData.images : []
})
export default connect(mapStateToProps)(DiscoverWord);

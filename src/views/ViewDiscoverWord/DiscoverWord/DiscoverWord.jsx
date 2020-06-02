import React, { Component } from 'react';
import Flex from "src/components/dom/Flex"
import { connect } from 'react-redux';
import FlatMessage from "src/components/molecules/FlatMessage";
import MessUpLetters from './dependencies/modifyLetters/MessUpLetters.sub';
import TestLetters from './dependencies/modifyLetters/TestLetters.sub';
import GameSuccess from "./dependencies/success/GameSuccess";
import style from './style';
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import { navigate } from 'gatsby';
import { discoverActions, discoverSelectors } from "src/redux/discover";
import { userSelectors } from 'src/redux/user';

class DiscoverWord extends Component {

  componentDidMount() {
    this.props.dispatch(discoverActions.createLettersToDiscover(this.props.state));
  }

  continueGame = () => {
    navigate("/list");
    this.props.dispatch(discoverActions.removeMessyLetters());
  }

  incrementPoints = () => {
    this.props.dispatch(discoverActions.incrementPoints(this.props.idWord, this.props.idUser));
  }

  render() {
    const { lettersEmpty, messyLetters, stateDiscover, images } = this.props;

    if (stateDiscover) {
      this.incrementPoints();
      return <GameSuccess onClick={this.continueGame} word={lettersEmpty.join('')} />
    }
    else {
      return (
        <Flex styles={style.flexDiscover}>
          <CircleImageSquare images={images} styles={style.squareImage} />
          <TestLetters letters={lettersEmpty} />
          <FlatMessage verticalMargin={25} text="Elige las letras correctas y descubre la palabra" />
          <MessUpLetters letters={messyLetters} />
        </Flex>
      )
    }
  }
}

const mapStateToProps = ({ discover, user }) => ({
  lettersEmpty: discover.testLetters,
  messyLetters: discover.messyLetters,
  stateDiscover: discover.stateDiscover,
  idWord: discoverSelectors.getIdWord(discover),
  idUser: userSelectors.getIdUser(user),
  images: discover.wordData !== null ? discover.wordData.images : []
})

export default connect(mapStateToProps)(DiscoverWord);

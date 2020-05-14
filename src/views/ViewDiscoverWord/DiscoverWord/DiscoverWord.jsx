import React, { Component } from 'react';
import Flex from "src/components/dom/Flex"
import { connect } from 'react-redux';
import FlatMessage from "src/components/molecules/FlatMessage";
import MessUpLetters from './subcontainers/MessUpLetters.sub';
import TestLetters from './subcontainers/TestLetters.sub';
import GameSuccess from "./subcomponents/GameSuccess";
import style from './style';
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import { navigate } from 'gatsby';
import { discoverActions, discoverSelectors } from "src/redux/discover";

class DiscoverWord extends Component {

  componentDidMount() {
    this.props.dispatch(discoverActions.createLettersToDiscover(this.props.state));
  }

  continueGame = () => {
    navigate("/list");
    this.props.dispatch(discoverActions.removeMessyLetters());
  }

  incrementPoints = () => {
    this.props.dispatch(discoverActions.incrementPoints(this.props.idWord));
  }

  render() {
    const { lettersEmpty, messyLetters, stateDiscover, images } = this.props;

    if (stateDiscover) {
      this.incrementPoints();
      return <GameSuccess onClick={this.continueGame} word={lettersEmpty.join('')} />
    }
    else {
      return (
        <Flex styles={{ ...style.flexDiscover._definition }}>
          <CircleImageSquare images={images} styles={{ ...style.squareImage._definition }} />
          <TestLetters letters={lettersEmpty} />
          <FlatMessage verticalMargin={25} text="Elige las letras correctas y descubre la palabra" />
          <MessUpLetters letters={messyLetters} />
        </Flex>
      )
    }
  }
}

const mapStateToProps = ({ discover }) => ({
  lettersEmpty: discover.testLetters,
  messyLetters: discover.messyLetters,
  stateDiscover: discover.stateDiscover,
  idWord: discoverSelectors.getIdWord(discover),
  images : discover.wordData !== null ? discover.wordData.images : []
})

export default connect(mapStateToProps)(DiscoverWord);
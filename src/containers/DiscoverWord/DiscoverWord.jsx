import React, { Component } from 'react';
import Flex from "src/components/dom/Flex"
import { connect } from 'react-redux';
import FlatMessage from "src/components/molecules/FlatMessage";
import MessUpLetters from './subcontainers/MessUpLetters.sub';
import TestLetters from './subcontainers/TestLetters.sub';
import { discoverActions } from "../../ducks/discover";
import GameSuccess from "./subcomponents/GameSuccess";
import style from './style';
import { navigate } from 'gatsby';




class DiscoverWord extends Component {


  componentDidMount() {
    this.props.dispatch(discoverActions.createLettersToDiscover(this.props.state));
  }


  continueGame = () => {
    navigate("/list");   
    this.props.dispatch(discoverActions.removeMessyLetters());
  }


  render() {
    const { lettersEmpty, messyLetters, stateDiscover } = this.props;
    if (stateDiscover) {
      return <GameSuccess onClick={this.continueGame} word={lettersEmpty.join('')} />
    }
    else {
      return (
        <Flex styles={{ ...style.flexDiscover._definition }}>
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
})


export default connect(mapStateToProps)(DiscoverWord);

import React, { Component } from 'react';
import Flex from 'src/components/dom/Flex';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import NewWordButtonGenerator from './subcomponents/NewWordButtonGenerator';
import { connect } from 'react-redux';
import { wordActions, wordSelectors } from 'src/ducks/word';

class NewWordToPlay extends Component {

  render() {
    const { onBackward, onForward, setIndexDefault, currentIndexListWord } = this.props;
    setIndexDefault({currentIndexListWord});

    return (
      <Flex>
        <NewWordButtonGenerator onClick={onBackward}>
          <IoIosArrowBack />
          atrás
        </NewWordButtonGenerator>
        <NewWordButtonGenerator onClick={onForward}>
          siguiente
          <IoIosArrowForward />
        </NewWordButtonGenerator>
      </Flex>
    )
  }
}

const mapStateToProps = state => ({
  currentIndexListWord: wordSelectors.getCurrentIndexWord(state)
})
const mapDispatchToProps = {
  onBackward: wordActions.backwardNewWordPlay,
  onForward: wordActions.forwardNewWordPlay,
  setIndexDefault: wordActions.setDefaultIndexWordPlay
}
export default connect(mapStateToProps, mapDispatchToProps)(NewWordToPlay);

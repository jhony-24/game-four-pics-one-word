import React, { Component } from 'react';
import Flex from 'src/components/dom/Flex';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import NewWordButtonGenerator from './dependencies/ButtonPlay/NewWordButtonGenerator';
import { connect } from 'react-redux';
import { wordActions, wordSelectors } from 'src/redux/word';
import { discoverActions } from 'src/redux/discover';

class NewWordToPlay extends Component {

  render() {
    const { onBackward, onForward, setIndexDefault, currentIndexListWord, listWords } = this.props;
    setIndexDefault({ currentIndexListWord });

    return (
      <Flex>
        <NewWordButtonGenerator onClick={() => onBackward(listWords[currentIndexListWord - 1])}>
          <IoIosArrowBack /> atrás
        </NewWordButtonGenerator>
        <NewWordButtonGenerator onClick={() => onForward(listWords[currentIndexListWord + 1])}>
          siguiente <IoIosArrowForward />
        </NewWordButtonGenerator>
      </Flex>
    )
  }
}

const mapStateToProps = state => ({
  currentIndexListWord: wordSelectors.getCurrentIndexWord(state),
  listWords: state.word.listWords
})
const mapDispatchToProps = (dispatch) => ({
  onBackward: (currentWord) => {
    dispatch(wordActions.backwardNewWordPlay())
    dispatch(discoverActions.createLettersToDiscover(currentWord))
  },
  onForward: (currentWord) => {
    dispatch(wordActions.forwardNewWordPlay())
    dispatch(discoverActions.createLettersToDiscover(currentWord))

  },
  setIndexDefault: (data) => dispatch(wordActions.setDefaultIndexWordPlay(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(NewWordToPlay);

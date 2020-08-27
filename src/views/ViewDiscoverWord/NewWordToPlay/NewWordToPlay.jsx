import React, { Component } from 'react';
import Flex from 'src/components/dom/Flex';
import { connect } from 'react-redux';
import { wordActions, wordSelectors } from 'src/redux/word';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import NewWordButtonGenerator from './dependencies/ButtonPlay/NewWordButtonGenerator';
import { discoverActions } from 'src/redux/discover';
import store from 'src/store/store';

class NewWordToPlay extends Component {
  componentDidMount() {
    this.props.onDefineCurrentIndex();
  }

  render() {
    const { onBackward, onForward } = this.props;
    return (
        <Flex>
          <NewWordButtonGenerator onClick={onBackward}>
            <IoIosArrowBack /> atrás
        </NewWordButtonGenerator>
          <NewWordButtonGenerator onClick={onForward}>
            siguiente <IoIosArrowForward />
          </NewWordButtonGenerator>
        </Flex>
    )
  }
}

const mapDispatchToProps = dispatch => {
  const onMoveTo = (action) => {
    dispatch(action);
    dispatch(discoverActions.createLettersToDiscover(
      store.getState().word.listWords[store.getState().word.currentIndexListWord]
    ));
  }
  const onDefineCurrentIndex = () => {
    dispatch(wordActions.setDefaultIndexWordPlay(
      wordSelectors.getCurrentIndexWord(store.getState())
    ));
  }
  return {
    onForward: () => onMoveTo(wordActions.forwardNewWordPlay()),
    onBackward: () => onMoveTo(wordActions.backwardNewWordPlay()),
    onDefineCurrentIndex
  }
}
export default connect(null, mapDispatchToProps)(NewWordToPlay);

import React, { Component } from 'react';
import Flex from 'src/components/dom/Flex';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import NewWordButtonGenerator from './subcomponents/NewWordButtonGenerator';
import { connect } from 'react-redux';
import { discoverActions } from 'src/ducks/discover';

class NewWordToPlay extends Component {

  render() {
    const { onBackward, onForward } = this.props;

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

const mapDispatchToProps = {
  onBackward: discoverActions.backwardNewWordPlay,
  onForward: discoverActions.forwardNewWordPlay
}
export default connect(null, mapDispatchToProps)(NewWordToPlay);

import React, { Component } from 'react';
import Flex from 'src/components/dom/Flex';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import NewWordButtonGenerator from './subcomponents/NewWordButtonGenerator';


class NewWordToPlay extends Component {
  render() {
    return (
      <Flex>
        <NewWordButtonGenerator>
          <IoIosArrowBack />
          atrás
        </NewWordButtonGenerator>
        <NewWordButtonGenerator>
          siguiente
          <IoIosArrowForward />
        </NewWordButtonGenerator>
      </Flex>
    )
  }
}

export default NewWordToPlay;

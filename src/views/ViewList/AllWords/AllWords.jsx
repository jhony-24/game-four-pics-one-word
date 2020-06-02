import React, { Component, Fragment } from 'react';
import FlatList from "src/components/molecules/FlatList"
import Ranking from "./dependencies/listWord/Ranking"
import ItemFlatList from './dependencies/listWord/ItemFlatList';
import LoadingPlaceholder from 'src/components/molecules/LoadingPlaceholder';
import ErrorGetData from './dependencies/listWord/ErrorGetData';
import Letter from 'src/models/letter';
import { connect } from "react-redux";
import { wordActions } from "src/redux/word";

class AllWords extends Component {
  constructor() {
    super();
    this.letter = new Letter();
  }

  componentDidMount() {
    this.props.dispatch(wordActions.getListAllWords());
  }

  generateRandomLetters = (text) => {
    return this.letter.createNewTextArray(text).join('');
  }

  render() {
    const { listWords, loading, error } = this.props;
    if (loading) {
      return <LoadingPlaceholder repeat={7} />
    }
    if (error) {
      return <ErrorGetData />
    }
    return (
      <Fragment>
        <Ranking/>
        <FlatList data={listWords} renderItem={(current, key) => (
          <ItemFlatList
            key={key}
            current={current}
            images={current.images}
            letters={this.generateRandomLetters(current.letters)}
            points={current.points} />
        )} />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ word }) => ({
  listWords: word.listWords,
  loading: word.loading,
  error: word.error
});

export default connect(mapStateToProps)(AllWords);

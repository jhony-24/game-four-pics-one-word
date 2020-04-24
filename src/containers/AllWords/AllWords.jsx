import React, { Component, Fragment } from 'react';
import FlatList from "src/components/molecules/FlatList"
import Ranking from "./subcontainers/Ranking"
import ItemFlatList from './subcomponents/ItemFlatList';
import { connect } from "react-redux";
import { wordActions } from "src/ducks/word";
import LoadingPlaceholder from 'src/components/molecules/LoadingPlaceholder';
import ErrorGetData from './subcomponents/ErrorGetData';

class AllWords extends Component {

  componentDidMount() {
    this.props.dispatch(wordActions.getListAllWords());
  }

  render() {
    const { listWords, loading, error } = this.props;
    if (loading) {
      return <LoadingPlaceholder repeat={7} />
    }
    if (error) {
      return <ErrorGetData/>
    }
    return (
      <Fragment>
        <Ranking />
        <FlatList data={listWords} renderItem={(current, key) => (
          <ItemFlatList
            key={key}
            current={current}
            images={current.images}
            letters={current.letters}
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

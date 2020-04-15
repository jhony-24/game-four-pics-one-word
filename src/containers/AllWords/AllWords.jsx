import React, { Component, Fragment } from 'react';
import FlatList from "src/components/molecules/FlatList"
import Ranking from "./subcontainers/Ranking"
import ItemFlatList from './subcomponents/ItemFlatList';
import { connect } from "react-redux";
import { wordActions } from "src/ducks/word";


const images = [
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
  "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg",
  "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg",
  "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
]
const data = Array(20).fill({
  images: images,
  letters: "jhony",
})


class AllWords extends Component {

  componentDidMount() {
    this.props.dispatch(wordActions.getListAllWords());
  }

  render() {
    const { listWords } = this.props;
    return (
      <Fragment>
        <Ranking />
        <FlatList data={data} renderItem={(current, key) => (
          <ItemFlatList
            key={key}
            current={current}
            images={current.images}
            letters={current.letters} />
        )} />
      </Fragment>
    )
  }

}



const mapStateToProps = ({ word }) => ({
  listWords: word.listWords,
});
export default connect(mapStateToProps)(AllWords);

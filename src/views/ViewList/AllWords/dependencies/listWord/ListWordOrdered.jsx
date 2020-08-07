import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import ItemFlatListWord from './ItemFlatListWord';
import FlatList from "src/components/molecules/FlatList"
import { wordSelectors } from 'src/redux/word';
import ButtonLoadMoreWords from './ButtonLoadMoreWords';

class ListWordOrdered extends Component {
	render() {
        const { listWords } = this.props;
        return (
			  <Fragment>
            <FlatList data={listWords} renderItem={(current, key) => (
					<ItemFlatListWord
					key={key}
					current={current}
					images={current.images}
					letters={current.messyLetters}
					points={current.points} />
					)} />
					<ButtonLoadMoreWords/>
			</Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    listWords: wordSelectors.getAllWords(state)
});
export default connect(mapStateToProps)(ListWordOrdered);
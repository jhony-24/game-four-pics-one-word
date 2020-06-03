import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemFlatList from './ItemFlatList';
import FlatList from "src/components/molecules/FlatList"
import { wordSelectors } from 'src/redux/word';

class ListWordOrdered extends Component {
    render() {
        const { listWords } = this.props;

        return (
            <FlatList data={listWords} renderItem={(current, key) => (
                <ItemFlatList
                    key={key}
                    current={current}
                    images={current.images}
                    letters={current.letters}
                    points={current.points} />
            )} />
        )
    }
}

const mapStateToProps = (state) => ({
    listWords: wordSelectors.getAllWords(state)
});
export default connect(mapStateToProps)(ListWordOrdered);
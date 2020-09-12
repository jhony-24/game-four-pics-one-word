import React, { Fragment } from "react"
import { connect } from "react-redux"
import ItemFlatListWord from "./ItemFlatListWord"
import FlatList from "src/components/molecules/FlatList"
import { wordSelectors } from "src/redux/word"
import ButtonLoadMoreWords from "../AllWordPieces/ButtonLoadMoreWords"

const ListWordOrdered = ({ listWords }) => (
	<Fragment>
		<FlatList
			data={listWords}
			renderItem={(current, key) => (
				<ItemFlatListWord
					key={key}
					current={current}
					images={current.images}
					letters={current.messyLetters}
					points={current.points}
				/>
			)}
		/>
		<ButtonLoadMoreWords />
	</Fragment>
)

const mapState = state => ({
	listWords: wordSelectors.getAllWords(state),
})
export default connect(mapState)(ListWordOrdered)

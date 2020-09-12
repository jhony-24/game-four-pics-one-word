import React, { Fragment, useEffect } from "react"
import RankingWords from "./ListWord/RankingWords"
import LoadingPlaceholder from "src/components/molecules/LoadingPlaceholder"
import ErrorGetData from "./AllWordPieces/ErrorGetData"
import { connect } from "react-redux"
import ListWordOrdered from "./ListWord/ListWordOrdered"
import { wordActions } from "src/redux/word"

const AllWords = ({ getListAllWords, loading, error }) => {
	useEffect(() => {
		getListAllWords()
	}, [getListAllWords])

	if (loading) return <LoadingPlaceholder repeat={7} />
	if (error) return <ErrorGetData />
	return (
		<Fragment>
			<RankingWords />
			<ListWordOrdered />
		</Fragment>
	)
}

const mapState = ({ word }) => ({
	loading: word.loading,
	error: word.error,
});
const mapDispatch = { getListAllWords : wordActions.getListAllWords };
export default connect(mapState,mapDispatch)(AllWords)

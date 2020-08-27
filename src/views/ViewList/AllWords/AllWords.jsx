import React, { Fragment, useEffect } from "react"
import RankingWords from "./dependencies/listWord/RankingWords"
import LoadingPlaceholder from "src/components/molecules/LoadingPlaceholder"
import ErrorGetData from "./dependencies/listWord/ErrorGetData"
import { connect } from "react-redux"
import ListWordOrdered from "./dependencies/listWord/ListWordOrdered"
import { wordActions } from "src/redux/word"

const AllWords = ({ dispatch, loading, error }) => {
	
	useEffect(() => {
		dispatch(wordActions.getListAllWords())
	}, [dispatch]);

	if (loading) return <LoadingPlaceholder repeat={7} />
	if (error) return <ErrorGetData />
	return (
		<Fragment>
			<RankingWords />
			<ListWordOrdered />
		</Fragment>
	)
}

const mapStateToProps = ({ word }) => ({
	loading: word.loading,
	error: word.error,
})
export default connect(mapStateToProps)(AllWords)

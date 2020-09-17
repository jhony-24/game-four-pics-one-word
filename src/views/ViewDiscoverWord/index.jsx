import React, { lazy } from "react"
import LazyLoad from "src/components/hoc/LazyLoad"
import HeaderDiscoverWord from "./DiscoverWord/HeaderDiscover/HeaderDiscoverWord"
import LoadingWordGame from "./ViewDiscoverWordPieces/LoadingWordGame"

const Async = {
	Word: lazy(() => import("./DiscoverWord")),
	ChangeButtons: lazy(() => import("./NewWordToPlay")),
}

const ViewDiscoverWord = ({ state }) => {
	const components = [<Async.Word state={state} />, <Async.ChangeButtons />];
	return (
		<div className="guess-word">
			<HeaderDiscoverWord />
			<LazyLoad.Multiple loading={<LoadingWordGame />} components={components} />
		</div>
	)
}

export default ViewDiscoverWord

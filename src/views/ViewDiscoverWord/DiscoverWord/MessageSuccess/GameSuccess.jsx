import React from "react"
import StarsBurst from "src/components/animations/StarsBurst"
import { GiTrophyCup } from "react-icons/gi"
import { connect } from "react-redux"
import { discoverActions } from "src/redux/discover"
import { navigate } from "gatsby"
import useLanguage from "src/hooks/useInternationalize/useLanguage"

const GameSuccess = ({ word, continueGame, idWord, idUser }) => {
	const { translate } = useLanguage("game.preview.success-game.")
	return (
		<StarsBurst>
			<GiTrophyCup color="darkorange" size={60} />
			<h2>{translate("title")}</h2>
			<h3>{translate("message-word", { word })}</h3>
			<br />
			<button onClick={() => continueGame({ idWord, idUser })}>
				{translate("button")}
			</button>
		</StarsBurst>
	)
}

const mapStateToProps = ({ discover }) => ({
	word: discover.testLetters.join(""),
})
const mapDispatchToProps = dispatch => ({
	continueGame({ idWord, idUser }) {
		navigate("/list")
		dispatch(discoverActions.removeMessyLetters())
		dispatch(discoverActions.incrementPoints({ idWord, idUser }))
	},
})
export default connect(mapStateToProps, mapDispatchToProps)(GameSuccess)

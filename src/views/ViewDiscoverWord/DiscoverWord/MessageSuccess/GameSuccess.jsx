import React from "react"
import StarsBurst from "src/components/animations/StarsBurst"
import { GiTrophyCup } from "react-icons/gi"
import { connect } from "react-redux"
import { discoverActions } from "src/redux/discover"
import { navigate } from "gatsby"

const GameSuccess = ({ word, continueGame, idWord, idUser }) => {
	return (
		<StarsBurst>
			<GiTrophyCup color="darkorange" size={60} />
			<h2>Estupendo lo lograste</h2>
			<h3>
				La palabra es <q>{word}</q>
			</h3>
			<br />
			<button onClick={() => continueGame({ idWord, idUser })}>
				continuar y ganar más
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

import React, { Component } from "react"
import Letter from "src/components/molecules/Letter"
import SWrapperGrid from "src/components/styled/wrappers/SWrapperGrid"
import { PRIMARY_COLOR, SILVER_COLOR, TEXT_PRIMARY } from "src/theme"
import { connect } from "react-redux"
import { discoverActions } from "src/redux/discover"

class TestLetters extends Component {
	handlerPressLetter = paramsLetter => this.props.giveBackLetter(paramsLetter);
	letterEmpty = letter => letter !== 0

	render() {
		const { letters } = this.props
		return (
			<SWrapperGrid $verticalMargin={20}>
				{letters.map((letter, index) => (
					<Letter
						key={index}
						text={letter}
						visibilityText={this.letterEmpty(letter)}
						color={this.letterEmpty(letter) ? TEXT_PRIMARY : "black"}
						background={this.letterEmpty(letter) ? PRIMARY_COLOR : SILVER_COLOR}
						onPressLetter={() =>
							this.letterEmpty(letter) &&
							this.handlerPressLetter({ letter, index })
						}
					/>
				))}
			</SWrapperGrid>
		)
	}
}

const mapState = ({ discover }) => ({
	letters: discover.testLetters,
})
const mapDispatch = { giveBackLetter: discoverActions.giveBackLetter }
export default connect(mapState,mapDispatch)(TestLetters)

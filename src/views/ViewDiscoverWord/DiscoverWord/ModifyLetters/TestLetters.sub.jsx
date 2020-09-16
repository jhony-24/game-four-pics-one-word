import React from "react"
import Letter from "src/components/molecules/Letter"
import SWrapperGrid from "src/components/styled/wrappers/SWrapperGrid"
import { PRIMARY_COLOR, SILVER_COLOR, TEXT_PRIMARY } from "src/theme"
import { connect } from "react-redux"
import { discoverActions } from "src/redux/discover"

const TestLetters = ({ letters, giveBackLetter }) => {
	return (
		<SWrapperGrid $verticalMargin={20}>
			{letters.map((letter, index) => (
				<Letter
					key={index}
					text={letter}
					visibilityText={letterEmpty(letter)}
					color={letterEmpty(letter) ? TEXT_PRIMARY : "black"}
					background={letterEmpty(letter) ? PRIMARY_COLOR : SILVER_COLOR}
					onPressLetter={() =>
						letterEmpty(letter) && giveBackLetter({ letter, index })
					}
				/>
			))}
		</SWrapperGrid>
	)
}

const letterEmpty = letter => letter !== 0

const mapState = ({ discover }) => ({
	letters: discover.testLetters,
})
const mapDispatch = { giveBackLetter: discoverActions.giveBackLetter }
export default connect(mapState, mapDispatch)(TestLetters)

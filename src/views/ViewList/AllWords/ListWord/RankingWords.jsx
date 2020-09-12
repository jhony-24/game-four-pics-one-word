import React from "react"
import { css } from "aphrodite/no-important"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import Paragraph from "src/components/molecules/Paragraph"
import { FaStar, FaCog } from "react-icons/fa"
import { TEXT_PRIMARY } from "src/theme"
import { wordSelectors } from "src/redux/word"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import style, { CardRankingWords, SFlexContainerItemsWord, SFlexItemWord } from "./ListWord.style"

const RankingWords = ({ topRanked }) => {
	const RankingParagraph = <Paragraph colortitle={TEXT_PRIMARY} styles={style.title}
		title={
			<SWrapperFlex>
			Los más descubiertos <FaCog onClick={() => navigate("/settings")} />
			</SWrapperFlex>
		}
	/>

	const ItemsRanked = <SFlexContainerItemsWord>{topRanked.map((current, key) => {
		let center = key === 1 && style.rankHigh
		return (
			<SFlexItemWord key={key}>
				<CircleImageSquare
					images={current.images}
					styles={[style.circleImage, center]}
				/>
				<FaStar />
				<span className={css(style.textRank)}>{current.points}</span>
			</SFlexItemWord>
		)
	})}
	</SFlexContainerItemsWord>

	return (
		<CardRankingWords>
			{RankingParagraph}
			{ItemsRanked}
		</CardRankingWords>
	)
}

const mapState = state => ({
	topRanked: wordSelectors.getWordsTopRanked(state),
})
export default connect(mapState)(RankingWords)

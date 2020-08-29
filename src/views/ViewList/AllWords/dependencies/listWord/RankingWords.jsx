import React from "react"
import { css } from "aphrodite/no-important"
import style from "../../style"
import Flex from "src/components/dom/Flex"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import Card from "src/components/molecules/Card"
import Paragraph from "src/components/molecules/Paragraph"
import { FaStar, FaCog } from "react-icons/fa"
import { TEXT_PRIMARY } from "src/theme"
import { wordSelectors } from "src/redux/word"
import { connect } from "react-redux"
import { navigate } from "gatsby"

const RankingWords = ({ topRanked }) => {
	const RankingParagraph = (
		<Paragraph colortitle={TEXT_PRIMARY} styles={style.title} title={
				<Flex>
					Los más descubiertos <FaCog onClick={() => navigate("/settings")} />
				</Flex>
			}
		/>
	)

	const ItemsRanked = topRanked.map((current, key) => {
		let center = key === 1 && style.rankHigh
		return (
			<Flex styles={style.flexCtnImg} key={key}>
				<CircleImageSquare images={current.images} styles={[style.circleImage, center]} />
				<FaStar />
				<span className={css(style.textRank)}>{current.points}</span>
			</Flex>
		)
	})

	return (
		<Card styles={style.card}>
			{RankingParagraph}
			<Flex styles={style.container}>{ItemsRanked}</Flex>
		</Card>
	)
}

const mapStateToProps = state => ({
	topRanked: wordSelectors.getWordsTopRanked(state),
})
export default connect(mapStateToProps)(RankingWords)

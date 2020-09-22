import React from "react"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import HeaderTitleMessage from "./HeaderTitleMessage"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import style, {	SHeaderCard,	SHeaderSmallTitle } from "./LoginHeaderDecorator.style"
import useLanguage from "src/hooks/useInternationalize/useLanguage"

const HeaderDecorator = () => {
	const { translate } = useLanguage();
	return (
		<SHeaderCard>
			<SWrapperFlex>
				<SHeaderSmallTitle>{translate("game.login.banner-message.start")}</SHeaderSmallTitle>
			</SWrapperFlex>
			<SWrapperFlex>
				<HeaderTitleMessage />
				<CircleImageSquare images={images} styles={style.img} />
			</SWrapperFlex>
		</SHeaderCard>
	)
}

const images = [
	"https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985__340.jpg",
	"https://cdn.pixabay.com/photo/2020/05/18/22/17/travel-5188598__340.jpg",
	"https://cdn.pixabay.com/photo/2020/05/24/11/14/sea-5213746__340.jpg",
	"https://cdn.pixabay.com/photo/2020/04/17/19/57/anemone-5056690__340.jpg",
]

export default HeaderDecorator

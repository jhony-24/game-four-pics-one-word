import React from "react"
import useLanguage from "src/hooks/useInternationalize/useLanguage"
import { SHeaderTitleContainer, SHeaderTitlePrimary, SHeaderTitleThink } from "./LoginHeaderDecorator.style"

const HeaderTitleMessage = () => {
	const { translate } = useLanguage("game.login.banner-message.");
	return (
		<SHeaderTitleContainer>
			<SHeaderTitlePrimary>{translate("title")}</SHeaderTitlePrimary>
			<SHeaderTitleThink>, {translate("message")}</SHeaderTitleThink>
		</SHeaderTitleContainer>
	)
}

export default HeaderTitleMessage

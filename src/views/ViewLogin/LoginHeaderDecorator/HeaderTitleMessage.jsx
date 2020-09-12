import React from "react"
import { SHeaderTitleContainer, SHeaderTitlePrimary, SHeaderTitleThink } from "./LoginHeaderDecorator.style"

const HeaderTitleMessage = () => {
	return (
		<SHeaderTitleContainer>
			<SHeaderTitlePrimary>Bienvenido</SHeaderTitlePrimary>
			<SHeaderTitleThink>, es hora de comenzar a jugar</SHeaderTitleThink>
		</SHeaderTitleContainer>
	)
}

export default HeaderTitleMessage

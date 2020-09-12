import React from "react"
import Text from "src/components/atoms/Text/Text"
import { AiOutlineSync } from "react-icons/ai"
import { TEXT_SECONDARY } from "src/theme"
import Fade from "src/components/animations/Fade"
import { SErrorGetDataContainer, SErrorTitle } from "./AllWordPieces.style"

const ErrorGetData = () => {
	return (
		<SErrorGetDataContainer>
			<Fade type="in">
				<SErrorTitle>Ups! An error has occurred</SErrorTitle>
				<Text color="gray">the data was not obtained correctly</Text>
				<br />
				<a href={window.location}>
					<AiOutlineSync size={30} color={TEXT_SECONDARY} />
					<Text>reload</Text>
				</a>
			</Fade>
		</SErrorGetDataContainer>
	)
}

export default ErrorGetData

import React, { useEffect } from "react"
import { BsArrowLeft } from "react-icons/bs"
import {
	useForgotPasswordOptionsContext,
	forgotPasswordScenes as options,
} from "../ForgotPasswordOptions/ForgotPasswordOptionsProvider"
import { SForgotPasswordWrapperGoBack } from "./ForgotPasswordPieces.style"

const ForgotPasswordGoBackScene = () => {
	const { setScene } = useForgotPasswordOptionsContext()

	useEffect(() => {
		const onKeyUpListener = event => {
			if (event.keyCode === 8 && event.code === "Backspace") setScene(options.default)
		}
		window.addEventListener("keyup", onKeyUpListener)
		return () => window.removeEventListener("keyup", onKeyUpListener)
	}, [setScene])

	return (
		<SForgotPasswordWrapperGoBack>
			<BsArrowLeft size={35} onClick={() => setScene(options.default)} />
		</SForgotPasswordWrapperGoBack>
	)
}

export default ForgotPasswordGoBackScene

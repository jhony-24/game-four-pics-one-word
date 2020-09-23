import React, { lazy } from "react"
import { useForgotPasswordOptionsContext } from "./ForgotPasswordOptionsProvider"

const ForgotPasswordOptions = () => {
	const { scene } = useForgotPasswordOptionsContext()
	const CurrentScene = AsyncScenes[scene]
	return <CurrentScene />
}

const AsyncScenes = {
	defaul: lazy("./OptionDefault/OptionDefaultScene"),
	email: lazy("./OptionEmail/OptionEmailScene"),
	sms: lazy("./OptionMessage/OptionMessageScene"),
}

export default ForgotPasswordOptions

import React, { lazy } from "react"
import { forgotPasswordScenes, useForgotPasswordOptionsContext} from "./ForgotPasswordOptionsProvider"

const ForgotPasswordOptions = () => {
	const { scene } = useForgotPasswordOptionsContext()
	const CurrentScene = AsyncScenes[scene]
	return <CurrentScene />
}


const options = forgotPasswordScenes;
const AsyncScenes = {
	[options.defaul]: lazy("./OptionDefault/OptionDefaultScene"),
	[options.email]: lazy("./OptionEmail/OptionEmailScene"),
	[options.sms]: lazy("./OptionMessage/OptionMessageScene"),
}

export default ForgotPasswordOptions

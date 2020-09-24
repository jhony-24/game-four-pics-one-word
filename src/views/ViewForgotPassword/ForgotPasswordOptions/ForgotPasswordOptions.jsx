import React, { lazy } from "react"
import Loading from "src/components/atoms/Loading"
import LazyLoad from "src/components/hoc/LazyLoad"
import { forgotPasswordScenes as options, useForgotPasswordOptionsContext} from "./ForgotPasswordOptionsProvider"

const ForgotPasswordOptions = () => {
	const { scene } = useForgotPasswordOptionsContext()
	const CurrentScene = AsyncScenes[scene];
	return 	<LazyLoad component={CurrentScene} loading={<Loading fullScreen/>} />
}

const AsyncScenes = {
	[options.default]: lazy(() => import("./OptionDefault/OptionDefaultScene")),
	[options.email]: lazy(() => import("./OptionEmail/OptionEmailScene")),
	[options.sms]: lazy(() => import("./OptionMessagePhone/OptionMessagePhoneScene")),
}

export default ForgotPasswordOptions

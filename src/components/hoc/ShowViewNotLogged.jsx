import React from "react"
import Auth from "src/models/auth"
import { navigate } from "gatsby"

const ShowViewNotLogged = WrapperComponentRender => {
	const InnerWrapperComponent = props => {
		if (Auth.get() === null) return <WrapperComponentRender {...props} />
		else {
			navigate("/list")
			return null
		}
	}
	return InnerWrapperComponent
}

export default ShowViewNotLogged

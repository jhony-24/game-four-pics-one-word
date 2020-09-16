import React, { useState } from "react"
import Auth from "src/models/auth"
import { navigate } from "gatsby"
import { useEffect } from "react"

const CheckLogged = WrapperComponentRender => {
	const InnerWrapperComponent = props => {
		const [logged, setLogged] = useState(false)
		useEffect(() => {
			if (Auth.logged()) setLogged(true)
			else return navigate("/")
		}, [setLogged])
		return logged ? <WrapperComponentRender {...props} /> : null
	}
	return InnerWrapperComponent
}

export default CheckLogged

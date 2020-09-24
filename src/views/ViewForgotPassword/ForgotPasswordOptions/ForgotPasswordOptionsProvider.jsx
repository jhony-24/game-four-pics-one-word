import React, { useState, createContext, useContext } from "react"

const ForgotPasswordOptionsContext = createContext()

const ForgotPasswordOptionsProvider = ({ children }) => {
	const [scene, setScene] = useState("default")
	return (
		<ForgotPasswordOptionsContext.Provider value={{scene, setScene}}>
			{children}
		</ForgotPasswordOptionsContext.Provider>
	)
}

export const forgotPasswordScenes = {
	default: "default",
	email: "email",
	sms: "sms",
}

export const useForgotPasswordOptionsContext = () => useContext(ForgotPasswordOptionsContext)
export default ForgotPasswordOptionsProvider

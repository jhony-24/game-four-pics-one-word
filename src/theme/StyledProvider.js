import React, { useEffect, useState } from "react"
import { Provider as StyletronProvider } from "styletron-react"
import { Provider } from "./styled"
import theme from "."

const ThemeProvider = ({ children }) => {
	const [engine, setEngine] = useState(null)
	useEffect(() => {
		import("styletron-engine-atomic").then(styletron => {
			setEngine(new styletron.Client())
		})
	}, [])

	if (!engine) return null

	return (
		<StyletronProvider value={engine} debugAfterHydration>
			<Provider value={theme}>{children}</Provider>
		</StyletronProvider>
	)
}

export default ThemeProvider

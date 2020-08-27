import React from "react"
import { Provider as ProviderRedux } from "react-redux"
import { CookiesProvider } from "react-cookie"
import store, { persistor } from "./store"
import { PersistGate } from "redux-persist/integration/react"
import { ThemeProvider } from "src/theme/styled"

export default ({ element }) => (
	<ThemeProvider>
		<CookiesProvider>
			<ProviderRedux store={store}>
				<PersistGate loading={null} persistor={persistor}>
					{element}
				</PersistGate>
			</ProviderRedux>
		</CookiesProvider>
	</ThemeProvider>
)

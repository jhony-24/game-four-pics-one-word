import React from "react"
import { Provider as ProviderRedux } from "react-redux"
import { CookiesProvider } from "react-cookie"
import store, { persistor } from "./store"
import { PersistGate } from "redux-persist/integration/react"

export default ({ element }) => (
	<React.StrictMode>
		<CookiesProvider>
			<ProviderRedux store={store}>
				<PersistGate loading={null} persistor={persistor}>
					{element}
				</PersistGate>
			</ProviderRedux>
		</CookiesProvider>
	</React.StrictMode>
)

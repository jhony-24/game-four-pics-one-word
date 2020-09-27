import React from "react"
import "firebase/app"
import "firebase/auth"
import "src/resources/styles/global.scss"
import { Provider as ProviderRedux } from "react-redux"
import { CookiesProvider } from "react-cookie"
import store, { persistor } from "./store"
import { PersistGate } from "redux-persist/integration/react"
import StyledProvider from "src/theme/StyledProvider"

export default ({ element }) => (
	<CookiesProvider>
		<ProviderRedux store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<StyledProvider>{element}</StyledProvider>
			</PersistGate>
		</ProviderRedux>
	</CookiesProvider>
)

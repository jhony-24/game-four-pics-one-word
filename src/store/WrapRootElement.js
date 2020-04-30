import React from "react"
import { Provider as ProviderRedux } from "react-redux";
import { CookiesProvider } from "react-cookie";
import store from "./store";

export default ({element}) => (
    <CookiesProvider>
        <ProviderRedux store={store}>
            {element}
        </ProviderRedux>
    </CookiesProvider>
)

import React from "react"
import theme from "."
import { createStyled } from "styletron-react"
import { driver, getInitialStyle } from "styletron-standard"

const { Provider, Consumer } = React.createContext()

export const ThemeProvider = ({ children }) => (
	<Provider value={theme}>{children}</Provider>
)

const wrapper = WrapperComponent => props => (
	<Consumer>{theme => <WrapperComponent {...props} $theme={theme} />}</Consumer>
)

export default createStyled({ wrapper, getInitialStyle, driver })

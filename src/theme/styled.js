import React from "react"
import { createStyled } from "styletron-react"
import { driver, getInitialStyle } from "styletron-standard"

export const { Provider, Consumer } = React.createContext()

const wrapper = WrapperComponent => props => (
	<Consumer>{theme => <WrapperComponent {...props} $theme={theme} />}</Consumer>
)

export default createStyled({ wrapper, getInitialStyle, driver })

import React, { useCallback, useEffect, useState } from "react"
import { css } from "aphrodite/no-important"
import style, { SFlexLoginBody } from "./Login.style"
import { connect } from "react-redux"
import { motion as Opacity } from "framer-motion"
import SignIn from "./LoginOptions/SignIn"
import SignUp from "./LoginOptions/SignUp"
import Loading from "src/components/atoms/Loading"

const Login = ({ loading }) => {
	const [scale, setScale] = useState(false)
	const [isSignUp, setIsSignUp] = useState(false)
	const changeView = useCallback(() => setIsSignUp(value => !value), [])

	useEffect(() => {
		const timer = setTimeout(() => setScale(true) , 10)
		return () => clearInterval(timer)
	}, [])

	const IsLoading = loading && <Loading text="verificando" />;

	return (
		<Opacity.div
			initial={{ opacity: 0 }}
			animate={{ opacity: scale ? 1 : 0 }}
			className={css(style.fContainer)}
		>
			<SFlexLoginBody>
				{IsLoading}
				<SignIn onOpenRegister={changeView} />
				<SignUp onClose={changeView} visible={isSignUp} />
			</SFlexLoginBody>
		</Opacity.div>
	)
}

const mapState = state => ({
	loading: state.user.loading,
})

export default connect(mapState)(Login)

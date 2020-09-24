import { useAnimation } from "framer-motion"
import React from "react"
import PropTypes from "prop-types";
import { SForgotPasswordCardText, SForgotPasswordCard } from "./ForgotPasswordPieces.style"

const ForgotPasswordCardOption = ({ icon: Icon, options, onClick }) => {
	const animate = useAnimation();
	animate.start(variantsAnimate);
	
	const processArrayDetail = [...options.detail].map((current,index) => {
			return current !== "*" ? current : <SForgotPasswordCardText.Point key={index}/>
	})

	return (
		<SForgotPasswordCard.Container 
			animate={animate} 
			onClick={onClick}
			$style={{padding:"2em 1em",width:"90%"}} >
				<SForgotPasswordCard.Item $justify="center">
					<Icon size={35} />
				</SForgotPasswordCard.Item>
				<SForgotPasswordCard.Item $dir="column" $align="flex-start">
					<SForgotPasswordCardText.Title>{options.title}</SForgotPasswordCardText.Title>
					<SForgotPasswordCardText.Message>{processArrayDetail}</SForgotPasswordCardText.Message>
				</SForgotPasswordCard.Item>
		</SForgotPasswordCard.Container>
	)
}

const variantsAnimate = {
		y: [100,0],
		opacity: [.2,1]
}

ForgotPasswordCardOption.propTypes = {
	options: PropTypes.shape({
		title: PropTypes.string,
		detail: PropTypes.string
	}),
	onClick: PropTypes.func,
}

export default ForgotPasswordCardOption

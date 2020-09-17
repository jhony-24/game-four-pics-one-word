import React from 'react'
import SEO from 'src/components/atoms/SEO/SEO';
import ShowViewNotLogged from "src/components/hoc/ShowViewNotLogged"
import ViewForgotPassword from 'src/views/ViewForgotPassword';

const ForgotPassword =() => {
	return (
		<SEO title="forgot my password">
			<div className="forgot-password">
				<ViewForgotPassword/>
			</div>
		</SEO>
		)
}

export default ShowViewNotLogged(ForgotPassword);

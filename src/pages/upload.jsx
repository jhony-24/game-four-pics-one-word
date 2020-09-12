import React, { lazy } from "react"
import CheckLogged from "src/components/hoc/CheckLogged"
import LazyLoad from "src/components/hoc/LazyLoad"
import Position from "src/components/styled/wrappers/Position"
import Loading from "src/components/atoms/Loading"
import Fade from "src/components/animations/Fade"
import SEO from "src/components/atoms/SEO"

const ViewUploadWord = lazy(() => import("src/views/ViewUploadWord"))

const Upload = () => (
	<SEO title="Hey! upload new word to discover">
		<div className="upload">
			<Fade>
				<LazyLoad
					component={ViewUploadWord}
					loading={
						<Position.Full>
							<Loading/>
						</Position.Full>
					}
				/>
			</Fade>
		</div>
	</SEO>
)

export default CheckLogged(Upload)

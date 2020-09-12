import React from "react"
import Loading from "src/components/atoms/Loading/Loading"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"

export default function LoadingWordGame() {
	return (
		<SWrapperFlex $style={{ margin: "1in auto" }}>
			<Loading />
		</SWrapperFlex>
	)
}

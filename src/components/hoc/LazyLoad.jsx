import React, { Suspense } from "react"
import Loading from "src/components/atoms/Loading"

const LazyLoad = ({ component: Component, loading, ...props }) => (
	<>
		<Suspense fallback={loading || <Loading />}>
			<Component {...props} />
		</Suspense>
	</>
)

LazyLoad.Multiple = ({ components: Components, loading }) => (
	<>
		<Suspense fallback={loading || <Loading />}>
			{Components.map( (CurrentComponent, key) => React.cloneElement(CurrentComponent, { key }) )}
		</Suspense>
	</>
)

export default LazyLoad

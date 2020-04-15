import React, { Suspense } from 'react';
import Loading from "src/components/atoms/Loading"



const LazyLoad = ({ component: Component, loading, ...props }) => (
  <>
    <Suspense fallback={loading || <Loading />}>
      <Component {...props} />
    </Suspense>
  </>
)



export default LazyLoad;

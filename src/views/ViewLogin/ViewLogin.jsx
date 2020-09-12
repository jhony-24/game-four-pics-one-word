import React, { lazy } from 'react';
import LazyLoad from 'src/components/hoc/LazyLoad';
import SWrapperFlex from 'src/components/styled/wrappers/SWrapperFlex';
import HeaderDecorator from './LoginHeaderDecorator/HeaderDecorator';

const Login = lazy(() => import("./Login"));

const ViewLogin = () => {
  return (
    <div className="login">
      <HeaderDecorator/>
      <SWrapperFlex>
        <LazyLoad component={Login} />
      </SWrapperFlex>
    </div>
  )
}

export default ViewLogin;

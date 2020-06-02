import React, { lazy } from 'react';
import Flex from "src/components/dom/Flex"
import LazyLoad from 'src/components/hoc/LazyLoad';
import HeaderDecorator from './LoginHeaderDecorator/HeaderDecorator';

const Login = lazy(() => import("./Login"));

const ViewLogin = () => {
  return (
    <div className="login">
      <HeaderDecorator/>
      <Flex>
        <LazyLoad component={Login} />
      </Flex>
    </div>
  )
}

export default ViewLogin;

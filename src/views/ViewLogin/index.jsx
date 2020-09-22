import React, { lazy } from 'react';
import LazyLoad from 'src/components/hoc/LazyLoad';
import SWrapperFlex from 'src/components/styled/wrappers/SWrapperFlex';
import HeaderDecorator from './LoginHeaderDecorator/HeaderDecorator';

const LoginAsync = lazy(() => import("./Login"));
const LoginSocialAsync = lazy(() => import("./LoginWithSocialAccounts"))

const ViewLogin = () => {
  return (
    <div className="login">
      <HeaderDecorator/>
      <SWrapperFlex $style={{flexDirection:"column"}}>
				<LazyLoad.Multiple components={[<LoginSocialAsync/>,<LoginAsync/>]} />
      </SWrapperFlex>
    </div>
  )
}

export default ViewLogin;

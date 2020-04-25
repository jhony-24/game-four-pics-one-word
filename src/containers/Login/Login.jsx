import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import Flex from "src/components/dom/Flex"
import { connect } from 'react-redux';
import { motion as Opacity } from 'framer-motion';
import SignIn from './subcontainers/SignIn';
import SignUp from './subcontainers/SignUp';
import Loading from "src/components/atoms/Loading"
import { userActions } from "src/ducks/user"

class Login extends Component {


  constructor() {
    super();
    this.state = {
      scale: false,
      isSignIn: true
    }
  }


  componentDidMount() {
    this.changeScale();
  }


  changeScale = () => setTimeout(() => {
    this.setState({ scale: true })
  }, 10)


  changeView = () => {
    this.setState(prevState => ({
      isSignIn: !prevState.isSignIn
    }));
  }

  signIn = (data) => {
    this.props.dispatch(userActions.signIn(data))
  }

  signUp = (data) => {
    this.props.dispatch(userActions.createUser(data));
  }


  render() {
    const { loading } = this.props;
    const { scale, isSignIn } = this.state;
    return (
      <Opacity.div initial={{ opacity: 0 }} animate={{ opacity: scale ? 1 : 0 }} className={css(style.fContainer)}>
        <Flex styles={{ ...style.flex._definition }}>
          {
            loading && <Loading text="verificando" />
          }
          {
            isSignIn ?
              <SignIn onChangeView={this.changeView} onClick={this.signIn} /> :
              <SignUp onChangeView={this.changeView} onClick={this.signUp} />
          }
        </Flex>
      </Opacity.div>
    )
  }

}




const mapStateToProps = state => ({
  loading: state.user.loading
})
export default connect(mapStateToProps)(Login);

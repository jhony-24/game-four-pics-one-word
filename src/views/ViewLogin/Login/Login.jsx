import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import Flex from "src/components/dom/Flex"
import { connect } from 'react-redux';
import { motion as Opacity } from 'framer-motion';
import SignIn from './dependencies/LoginOptions/SignIn';
import SignUp from './dependencies/LoginOptions/SignUp';
import Loading from "src/components/atoms/Loading"

class Login extends Component {
  state = {
    scale: false,
    isSignUp: false
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ scale: true });
    }, 10);
  }

  changeView = () => {
    this.setState(prevState => ({
      isSignUp: !prevState.isSignUp
    }));
  }

  render() {
    const { loading } = this.props;
    const { scale, isSignUp } = this.state;
    return (
      <Opacity.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scale ? 1 : 0 }}
        className={css(style.fContainer)}>
        <Flex styles={style.flex}>
          {loading && (
            <Loading text="verificando" />
          )}
          <SignIn onOpenRegister={this.changeView} onClick={this.signIn} />
          <SignUp onClose={this.changeView} onClick={this.signUp} visible={isSignUp} />
        </Flex>
      </Opacity.div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.user.loading
})

export default connect(mapStateToProps)(Login);
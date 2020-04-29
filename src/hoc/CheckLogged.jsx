import React, { Component } from "react"
import Auth from "src/models/auth"
import { navigate } from "gatsby";

const CheckLogged = (WrapperComponentRender) => class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            logged: false
        }
    }

    componentWillMount() {
        if (Auth.get() !== null) {
            this.setState({ logged: true });
        }
    }

    render() {
        if (this.state.logged) {
            return <WrapperComponentRender {...this.props} />
        }
        else {
            navigate("/");
            return null;
        }
    }

}

export default CheckLogged;
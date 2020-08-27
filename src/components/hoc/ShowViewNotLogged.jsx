import React, { Component } from 'react'
import Auth from 'src/models/auth';
import { navigate } from 'gatsby';

const ShowViewNotLogged = (WrapperComponentRender) => class extends Component {
    isNotLogged() {
        return Auth.get() === null;
    }

    render() {
        if (this.isNotLogged()) {
            return <WrapperComponentRender {...this.props} />
        }
        else {
            navigate('/list');
            return null;
        }
    }
}

export default ShowViewNotLogged;
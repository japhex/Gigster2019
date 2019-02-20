import React, { Component } from 'react';
import history from './../utils/routing';
import AuthHelperMethods from './AuthHelperMethods';

export default function withAuth(AuthComponent) {
    const Auth = new AuthHelperMethods();

    return class AuthWrapped extends Component {
        state = {
            confirm: null,
            loaded: false
        }

        componentWillMount() {
            if (!Auth.loggedIn()) {
                history.push('/login')
            } else {
                try {
                    this.setState({
                        confirm: Auth.getConfirm(),
                        loaded: true
                    })
                } catch (err) {
                    Auth.logout()
                    history.push('/login');
                }
            }
        }

        render() {
            return (
	            this.state.loaded && this.state.confirm &&
	                <AuthComponent history={this.props.history} user={this.state.confirm} />
            )
        }
    }
}
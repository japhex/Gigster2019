import React, { Component, Fragment } from "react";
import AuthHelperMethods from './components/AuthHelperMethods';
import { Link } from 'react-router-dom';

class Login extends Component {
    Auth = new AuthHelperMethods();

    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
	        const response = await this.Auth.login(this.state.username, this.state.password);

	        if (response === false) {
		        return alert("Sorry those credentials don't exist!");
	        }

	        this.props.history.replace('/');
        } catch(err) {
        	console.log(err);
        }
    }

    componentWillMount() {
        if (this.Auth.loggedIn()) {
	        this.props.history.replace('/');
        }
    }

    render() {
        return (
            <Fragment>
                <div className="main-wrapper">
                    <div className="box">
                        <div className="box-header">
                            <h1>Login</h1>
                        </div>
                        <form className="box-form">
                            <input className="form-item" placeholder="Username" name="username" onChange={this.handleChange}/>
                            <input className="form-item" placeholder="Password" name="password" type="password" onChange={this.handleChange}/>
                            <button className="form-submit" onClick={this.handleFormSubmit}>Login</button>
                        </form>
                        <Link className="link" to="/signup">Don't have an account? <span className="link-signup">Signup</span></Link>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Login;
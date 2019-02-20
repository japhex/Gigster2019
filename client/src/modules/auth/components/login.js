import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import { login } from '../actions';

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleFormSubmit = async (e) => {
    	const {login} = this.props;
        e.preventDefault();

        try {
	        await login(this.state);
        } catch(err) {
        	console.log(err);
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

const mapStateToProps = (state) => {
	return {}
};

export default connect(mapStateToProps, { login })(Login);

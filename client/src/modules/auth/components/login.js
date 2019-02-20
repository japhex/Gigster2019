import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import { login } from '../actions';
import UnauthenticatedLayout from 'components/layout/UnauthenticatedLayout/UnauthenticatedLayout';

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
            <UnauthenticatedLayout>
                <form>
                    <div className="form-control">
                        <input placeholder="Username" name="username" onChange={this.handleChange} />
                    </div>
	                <div className="form-control">
                        <input placeholder="Password" name="password" type="password" onChange={this.handleChange}/>
                    </div>
                    <button variant="contained" color="primary" onClick={this.handleFormSubmit}>Login</button>
	                <small>Don't have an account? <span className="link-signup">Signup</span></small>
                </form>
            </UnauthenticatedLayout>
        );
    }
}

const mapStateToProps = (state) => {
	return {}
};

export default connect(mapStateToProps, { login })(Login);

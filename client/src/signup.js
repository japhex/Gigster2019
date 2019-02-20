import React, {Component, Fragment} from "react";
import AuthHelperMethods from './components/AuthHelperMethods';
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Signup extends Component {
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
        await axios.post("/signup", {username: this.state.username, password: this.state.password});
        this.props.history.replace('/login');
    }

    componentDidMount() {
        if(this.Auth.loggedIn()){
            this.props.history.push('/dashboard')
        }
    }

    render() {
        return (
            <Fragment>
                <div className="main-wrapper">
                    <div className="box">
                        <div className="box-header">
                            <h1>Signup</h1>
                        </div>
                        <form className="box-form">
                            <input className="form-item" placeholder="Username" name="username" onChange={this.handleChange}/>
                            <input className="form-item" placeholder="Password" name="password" type="password" onChange={this.handleChange}/>
                            <button className="form-submit" onClick={this.handleFormSubmit}>Signup</button>
                        </form>
                        <Link className="link" to="/login">Already have an account? <span className="link-signup">Login</span></Link>
                    </div>
                </div>
            </Fragment>
        );
    }
}
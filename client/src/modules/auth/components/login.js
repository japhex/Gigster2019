import React, {useState} from "react"
import {connect} from "react-redux"
import { login } from '../actions';
import UnauthenticatedLayout from 'components/layout/UnauthenticatedLayout/UnauthenticatedLayout';

const Login = ({ login }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

    const handleChange = (e) => {
	    if (e.target.name === 'username') {
		    setUsername(e.target.value)
	    }
	    if (e.target.name === 'password') {
		    setPassword(e.target.value)
	    }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await login({username: username, password:password});
    }

    return (
        <UnauthenticatedLayout>
            <form>
                <div className="form-control">
                    <input placeholder="Username" name="username" onChange={handleChange} />
                </div>
                <div className="form-control">
                    <input placeholder="Password" name="password" type="password" onChange={handleChange}/>
                </div>
                <button variant="contained" color="primary" onClick={handleFormSubmit}>Login</button>
                <small>Don't have an account? <span className="link-signup">Signup</span></small>
            </form>
        </UnauthenticatedLayout>
    );
}

export default connect(null, { login })(Login);

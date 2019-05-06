import React, {useState} from "react"
import { Link } from 'react-router-dom';
import UnauthenticatedLayout from 'components/layout/UnauthenticatedLayout/UnauthenticatedLayout';

const Signup = ({ history }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

    const handleChange = e => {
    	if (e.target.name === 'username') {
		    setUsername(e.target.value)
	    }
	    if (e.target.name === 'password') {
		    setPassword(e.target.value)
	    }
    }

    const handleFormSubmit = async e => {
        e.preventDefault();
        // await AuthAPI.signup({username: username, password: password});
        history.replace('/login');
    }

    return (
	    <UnauthenticatedLayout>
            <form>
                <h1>Signup</h1>
                <input placeholder="Username" name="username" onChange={handleChange}/>
                <input placeholder="Password" name="password" type="password" onChange={handleChange}/>
                <button onClick={handleFormSubmit}>Signup</button>
                <Link className="link" to="/login">Already have an account? <span className="link-signup">Login</span></Link>
            </form>
        </UnauthenticatedLayout>
    );
}

export default Signup;
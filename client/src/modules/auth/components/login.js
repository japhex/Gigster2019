import React, {useState} from "react"
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Link, withRouter } from 'react-router-dom';
import UnauthenticatedLayout from 'components/layout/UnauthenticatedLayout/UnauthenticatedLayout';

const loginMutation = gql`
	mutation login($username: String!, $password: String!){
		login(username: $username, password: $password)
	}
`;

const Login = (props) => {
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

    const loginSuccess = (client, mutationResult) => {
    	const token = mutationResult.data.login;
    	
    	if (token !== undefined) {
    		localStorage.setItem('token', token);
		    props.history.push(`/gigs`)
	    }
    }

    return (
        <UnauthenticatedLayout>
	        <Mutation mutation={loginMutation} update={loginSuccess}>
		        {(login) => (
		            <form onSubmit={e => {
		            	e.preventDefault();
		            	login({ variables: { username:username, password:password }})}
		            }>
		                <div className="form-control">
		                    <input placeholder="Username" name="username" onChange={handleChange} />
		                </div>
		                <div className="form-control">
		                    <input placeholder="Password" name="password" type="password" onChange={handleChange}/>
		                </div>
		                <button variant="contained" color="primary">Login</button>
			            <div className="">
		                    <small>Don't have an account?
			                    <Link to="/signup">Signup</Link>
		                    </small>
			            </div>
		            </form>
		        )}
	        </Mutation>
        </UnauthenticatedLayout>
    );
}

export default withRouter(Login);

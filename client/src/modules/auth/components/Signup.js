import React from "react"
import { Link } from 'react-router-dom';
import UnauthenticatedLayout from 'components/layout/UnauthenticatedLayout/UnauthenticatedLayout';
import {useMutation} from "@apollo/react-hooks"
import {Input} from "components/utils/styled/Forms"
import {Field, Form, Formik} from "formik"
import {signupMutation, loginMutation} from "api/users/users"
import {setUserToken} from "../../../utils/auth"
import {Button} from 'components/utils/styled/Forms'

const Signup = ({ history }) => {
	const [signup] = useMutation(signupMutation);
	const [login] = useMutation(loginMutation, {
		update(cache, { data: { login } }) {
			setUserToken(login, history)
		}
	});

    return (
	    <UnauthenticatedLayout>
		    <Formik onSubmit={async ({username, password}) => {
			    await signup({variables: {username, password}})
			    await login({variables: {username, password}})
	        }}
	            render={({ isSubmitting }) => (
	                <Form>
		                <h1>Signup</h1>

		                <Field type="text" name="username" render={({field}) => (
			                <Input type="text" name="username" {...field} />
		                )} />

		                <Field type="password" name="password" render={({field}) => (
			                <Input type="password" name="password" {...field} />
		                )} />

		                <Button isLoading={isSubmitting}>
			                Signup
		                </Button>

		                <Link className="link" to="/login">Already have an account? <span className="link-signup">Login</span></Link>
	                </Form>
                )}
	        />
        </UnauthenticatedLayout>
    );
}

export default Signup;
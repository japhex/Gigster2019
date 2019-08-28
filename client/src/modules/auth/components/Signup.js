import React from "react"
import { Link } from 'react-router-dom';
import UnauthenticatedLayout from 'components/layout/UnauthenticatedLayout/UnauthenticatedLayout';
import {useMutation} from "@apollo/react-hooks"
import {Button, SIZE} from "baseui/button/index"
import {Input} from "baseui/input"
import {Field, Form, Formik} from "formik"
import {signupMutation} from "api/users/users"

const Signup = ({ history }) => {
	const [signup] = useMutation(signupMutation, {
		update() {
			history.replace('/login');
		}
	});

    return (
	    <UnauthenticatedLayout>
		    <Formik onSubmit={async (values) => {
			    await signup({variables: values})
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

		                <Button size={SIZE.compact} isLoading={isSubmitting}>
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
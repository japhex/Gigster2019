import React from "react"
import {useMutation} from "@apollo/react-hooks"
import { Link, withRouter } from 'react-router-dom';
import UnauthenticatedLayout from 'components/layout/UnauthenticatedLayout/UnauthenticatedLayout';
import {loginMutation} from 'api/users/users'
import {setUserToken} from "../../../utils/auth"
import {Field, Form, Formik} from "formik"
import {Input} from "components/utils/styled/Forms"
import {Button} from 'components/utils/styled/Forms'

const Login = ({history}) => {
	const [login] = useMutation(loginMutation, {
		update(cache, { data: { login } }) {
			setUserToken(login, history)
		}
	});

    return (
        <UnauthenticatedLayout>
	        <Formik onSubmit={async ({username, password}) => {
		        await login({ variables: {username, password}})
	        }}
                render={({ isSubmitting }) => (
	                <Form>
		                <Field type="text" name="username" render={({field}) => (
			                <Input type="text" name="username" {...field} />
		                )} />
		                <Field type="password" name="password" render={({field}) => (
			                <Input type="password" name="password" {...field} />
		                )} />
		                <Button isLoading={isSubmitting}>
			                Login
		                </Button>
	                    <small>Don't have an account?
		                    <Link to="/signup">Signup</Link>
	                    </small>
                    </Form>
                )}
            />
        </UnauthenticatedLayout>
    );
}

export default withRouter(Login);

import React from 'react'

import { useMutation } from '@apollo/react-hooks'
import { Field, Form, Formik } from 'formik'
import { Link, withRouter } from 'react-router-dom'

import { loginMutation } from 'api/users/users'
import { Button } from 'components/ui/forms/button'
import { Input } from 'components/ui/forms/input'
import UnauthenticatedLayout from 'components/ui/layout/UnauthenticatedLayout/UnauthenticatedLayout'
import { setUserToken } from 'utils/auth'

const Login = ({ history }) => {
  const [loginAction] = useMutation(loginMutation, {
    update(cache, { data: { login } }) {
      setUserToken(login, history)
    },
  })

  return (
    <UnauthenticatedLayout>
      <h1>Gigster | Login</h1>
      <Formik
        onSubmit={async ({ username, password }) => {
          await loginAction({ variables: { username, password } })
        }}
        render={({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="username"
              render={({ field }) => (
                <Input
                  type="text"
                  name="username"
                  placeholder="username"
                  {...field}
                />
              )}
            />
            <Field
              type="password"
              name="password"
              render={({ field }) => (
                <Input
                  type="password"
                  name="password"
                  placeholder="password"
                  {...field}
                />
              )}
            />
            <Button isLoading={isSubmitting}>Login</Button>
            <small>
              Don't have an account? <Link to="/signup">Signup</Link>
            </small>
          </Form>
        )}
      />
    </UnauthenticatedLayout>
  )
}

export default withRouter(Login)

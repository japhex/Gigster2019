import React from 'react'
import { Link } from 'react-router-dom'
import UnauthenticatedLayout from 'components/ui/layout/UnauthenticatedLayout/UnauthenticatedLayout'
import { useMutation } from '@apollo/react-hooks'
import { Button } from 'components/ui/forms/button'
import { Input } from 'components/ui/forms/input'
import { Field, Form, Formik } from 'formik'
import { signupMutation, loginMutation } from 'api/users/users'
import { setUserToken } from '../../utils/auth'

const Signup = ({ history }) => {
  const [signup] = useMutation(signupMutation)
  const [login] = useMutation(loginMutation, {
    update(cache, { data: { login } }) {
      setUserToken(login, history)
    },
  })

  return (
    <UnauthenticatedLayout>
      <h1>Gigster | Sign up</h1>
      <Formik
        onSubmit={async ({ username, password }) => {
          await signup({ variables: { username, password } })
          await login({ variables: { username, password } })
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

            <Button isLoading={isSubmitting}>Signup</Button>

            <small>
              Already have an account?{' '}
              <Link className="link" to="/login">
                <span className="link-signup">Login</span>
              </Link>
            </small>
          </Form>
        )}
      />
    </UnauthenticatedLayout>
  )
}

export default Signup

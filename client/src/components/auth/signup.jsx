import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { signupMutation, loginMutation } from 'api/users/users'
import { Button } from 'components/ui/forms/button'
import { Input } from 'components/ui/forms/input'
import UnauthenticatedLayout from 'components/ui/layout/UnauthenticatedLayout/UnauthenticatedLayout'
import { setUserToken } from 'utils/auth'

const Signup = ({ history }) => {
  const { register, handleSubmit } = useForm()
  const [signupAction, { loading: signupLoading }] = useMutation(signupMutation)
  const [loginAction, { loading: loginLoading }] = useMutation(loginMutation, {
    update(cache, { data: { login } }) {
      setUserToken(login, history)
    },
  })

  const onSubmit = async variables => {
    await signupAction({ variables })
    await loginAction({ variables })
  }

  return (
    <UnauthenticatedLayout>
      <h1>Gigster | Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('username')} />
        <Input {...register('password')} type="password" />
        <Button isLoading={signupLoading || loginLoading}>Signup</Button>
      </form>
      <small>
        Already have an account?{' '}
        <Link className="link" to="/login">
          <span className="link-signup">Login</span>
        </Link>
      </small>
    </UnauthenticatedLayout>
  )
}

export default Signup

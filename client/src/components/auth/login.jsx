import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'
import { Link, withRouter } from 'react-router-dom'

import { loginMutation } from 'api/users/users'
import { Button } from 'components/ui/forms/button'
import { Input } from 'components/ui/forms/input'
import UnauthenticatedLayout from 'components/ui/layout/UnauthenticatedLayout/UnauthenticatedLayout'
import { setUserToken } from 'utils/auth'

const Login = ({ history }) => {
  const { register, handleSubmit } = useForm()
  const [loginAction, { loading }] = useMutation(loginMutation, {
    update(cache, { data: { login } }) {
      setUserToken(login, history)
    },
  })

  const onSubmit = async variables => {
    await loginAction({ variables })
  }

  return (
    <UnauthenticatedLayout>
      <h1>Gigster | Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('username')} />
        <Input {...register('password')} type="password" />
        <Button isLoading={loading}>Login</Button>
      </form>
      <small>
        Don't have an account? <Link to="/signup">Signup</Link>
      </small>
    </UnauthenticatedLayout>
  )
}

export default withRouter(Login)

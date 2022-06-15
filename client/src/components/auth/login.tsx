import { useMutation } from '@apollo/react-hooks'
import { loginMutation } from 'api/users/users'
import { SubText } from 'components/auth/styled/auth.styled'
import { Button } from 'components/ui/forms/button'
import { Input } from 'components/ui/forms/input'
import UnauthenticatedLayout from 'components/ui/layout/UnauthenticatedLayout/unauthenticated-layout'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { setUserToken } from 'utils/auth'

const Login = () => {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [loginAction, { loading }] = useMutation(loginMutation, {
    // @ts-ignore
    update(cache, { data: { login } }) {
      setUserToken(login, history)
    },
  })

  // TODO: fix
  const onSubmit = async (variables: any) => {
    await loginAction({ variables })
  }

  return (
    <UnauthenticatedLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('username', { required: 'Please enter a username' })}
          error={errors?.username?.message}
          placeholder="username"
        />
        <Input
          {...register('password', { required: 'Please enter a password' })}
          error={errors?.password?.message}
          type="password"
          placeholder="password"
        />
        <Button isLoading={loading}>Login</Button>
      </form>
      <SubText>
        Don't have an account? <Link to="/signup">Signup</Link>
      </SubText>
    </UnauthenticatedLayout>
  )
}

export default Login

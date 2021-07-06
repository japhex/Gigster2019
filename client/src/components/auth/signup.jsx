import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { signupMutation, loginMutation } from 'api/users/users'
import { SubText } from 'components/auth/styled/auth.styled'
import { Button } from 'components/ui/forms/button'
import { Input } from 'components/ui/forms/input'
import UnauthenticatedLayout from 'components/ui/layout/UnauthenticatedLayout/UnauthenticatedLayout'
import { setUserToken } from 'utils/auth'

const Signup = ({ history }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
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
        <Button isLoading={signupLoading || loginLoading}>Signup</Button>
      </form>
      <SubText>
        Already have an account?{' '}
        <Link className="link" to="/login">
          <span className="link-signup">Login</span>
        </Link>
      </SubText>
    </UnauthenticatedLayout>
  )
}

export default Signup

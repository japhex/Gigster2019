import { Button as ButtonStyled } from 'components/ui/forms/button/styling'

export const Button = props => {
  const { children } = props

  return <ButtonStyled {...props}>{children}</ButtonStyled>
}

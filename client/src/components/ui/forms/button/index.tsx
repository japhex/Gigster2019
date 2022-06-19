import { Button as ButtonStyled } from 'components/ui/forms/button/styling'

// @ts-ignore
export const Button = props => {
  const { children } = props

  return <ButtonStyled {...props}>{children}</ButtonStyled>
}

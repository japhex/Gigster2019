import { ButtonStyled } from 'components/ui/forms/button/styling'

export const Button = props => {
  const { icon, children } = props

  return (
    <ButtonStyled {...props}>
      {icon}
      <span>{children}</span>
    </ButtonStyled>
  )
}

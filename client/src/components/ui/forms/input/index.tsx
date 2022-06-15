import { InputStyled } from 'components/ui/forms/input/styled'
import { Error } from 'components/ui/utils/error.styled'

export const Input = props => (
  <>
    <InputStyled {...props} />
    {props.error && <Error type="validation">{props.error}</Error>}
  </>
)

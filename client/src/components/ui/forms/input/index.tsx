import { InputStyled } from 'components/ui/forms/input/styled'
import { Error } from 'components/ui/utils/error.styled'

// @ts-ignore
export const Input = props => (
  <>
    <InputStyled {...props} />
    {/* @ts-ignore */}
    {props.error && <Error type="validation">{props.error}</Error>}
  </>
)

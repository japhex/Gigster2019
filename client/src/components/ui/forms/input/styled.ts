import styled from 'styled-components'

export const InputStyled = styled.input`
  display: inline-flex;
  background-color: ${props => props.theme.colors.inputBg};
  border: 1px solid ${({ theme, error }) => (error ? theme.colors.validationError : theme.colors.inputBorder)};
  border-radius: 0;
  box-shadow: rgba(0, 0, 0, 0) 0px 2px 6px 0px;
  color: hsl(0, 0%, 10%);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 10px 15px;
  transition-duration: 0.25s;
  transition-property: border;
  transition-timing-function: cubic-bezier(0.2, 0.8, 0.4, 1);
  user-select: text;
  width: 100%;
  -webkit-box-direction: normal;
  box-sizing: border-box;
  margin-top: 15px;

  &:first-child {
    margin-top: 0;
  }

  &:focus {
    outline: 0;
    border: 1px solid ${props => props.theme.colors.inputFocusBorder};
  }
`

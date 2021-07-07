import styled, { css } from 'styled-components'

import { theme } from 'themes/default'

export const Choice = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.bebas};
  border-radius: 2px;
  cursor: pointer;
  padding: 4px 13px 0 13px;
  font-size: 40px;
  line-height: 1;

  ${({ selected }) => {
    return (
      selected &&
      css`
        background: #fff;
        color: hsl(210, 12%, 16%);
      `
    )
  }}
`

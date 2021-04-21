import React from 'react'

import { SupportStyled, Title, Band } from '../styled/support'

export const Support = ({ supports, type }) => (
  <SupportStyled>
    {supports && supports.length > 0 && (
      <>
        <Title>{type === 'Festival' ? 'with:' : 'support:'}</Title>
        {supports.map((band, index) => (
          <Band>
            {band}
            {index !== supports.length - 1 && ', '}
          </Band>
        ))}
      </>
    )}
  </SupportStyled>
)

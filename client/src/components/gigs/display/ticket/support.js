import React from 'react'
import { SupportStyled } from '../../styles/gigStyled'
// import { MoreText } from 'japhex-ui'

export const Support = ({ supports }) => (
  <SupportStyled>
    {supports && supports.length > 0 && (
      <>
        <p>support:</p>
        {/*<MoreText maxLength={20}>*/}
        {/*	{*/}
        {/*		supports.map((band, index) =>*/}
        {/*			<>{band}{(index < 9 && index !== supports.length - 1) && ', '}</>*/}
        {/*		)*/}
        {/*	}*/}
        {/*</MoreText>*/}
        {supports[0]}
      </>
    )}
  </SupportStyled>
)

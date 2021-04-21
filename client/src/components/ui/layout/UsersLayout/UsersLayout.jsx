import React from 'react'

import { GlobalStyle } from '../../../../AppStyled'
import Header from '../../../layout/header'

import { UsersLayoutContainer } from './UsersLayoutStyled'

const UsersLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <UsersLayoutContainer>{children}</UsersLayoutContainer>
  </>
)

export default UsersLayout

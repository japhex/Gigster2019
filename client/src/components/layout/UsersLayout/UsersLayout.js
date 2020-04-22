import React from 'react'
import Header from './../Header/Header'
import { UsersLayoutContainer } from './UsersLayoutStyled'

const UsersLayout = ({ children }) => (
  <>
    <Header />
    <UsersLayoutContainer>{children}</UsersLayoutContainer>
  </>
)

export default UsersLayout

import React from 'react'
import StatsHeader from './stats/header'
import UserGigs from 'pages/userGigs'
import { UserSidebar } from './styles/userBlockStyled'

const Block = ({ user }) => (
  <>
    <UserSidebar>
      <h1 className="user-username">{user.username}</h1>
      <StatsHeader user={user} />
    </UserSidebar>
    <UserGigs user={user} />
  </>
)

export default Block

import StatsHeader from 'components/users/user/stats/header'
import { UserSidebar } from 'components/users/user/styles/user-block.styled'
import UserGigs from 'pages/userGigs'


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

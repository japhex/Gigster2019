import { UserList } from 'components/users/user/styles/user-search.styled'
import { Link } from 'react-router-dom'


const Results = ({ users }) => (
  <UserList users={users}>
    {users.map(user => (
      <li key={user.id}>
        <Link to={`/users/${user.username}`}>{user.username}</Link>
      </li>
    ))}
  </UserList>
)

export default Results

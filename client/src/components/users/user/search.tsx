import { useState } from 'react'

import { useApolloClient } from '@apollo/react-hooks'
import { searchUsers } from 'api/users/users'
import { Input } from 'components/ui/forms/input'
import Results from 'components/users/user/results'

const Search = () => {
  const client = useApolloClient()
  const [users, setUsers] = useState([])

  const handleKeyUp = async e => {
    const username = e.target.value
    const { data } = await client.query({
      query: searchUsers,
      variables: { username },
    })

    setUsers(username === '' ? [] : data.searchUsers)
  }

  return (
    <>
      <Input placeholder="Search for user..." onKeyUp={e => handleKeyUp(e)} />

      <Results users={users} />
    </>
  )
}

export default Search

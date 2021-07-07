import { useState } from 'react'

import { Input } from 'baseui/input'

import { Button } from 'components/ui/forms/button'
import { baseui } from 'themes/baseui/overrides'

const SearchForm = ({ register, loading }) => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input
        {...register('artist')}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Artist name"
        overrides={{
          ...baseui.input,
        }}
      />
      <Button isLoading={loading}>Search</Button>
    </>
  )
}

export default SearchForm

import { useState } from 'react'

import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Button } from 'components/ui/forms/button'
import { baseui } from 'themes/baseui/overrides'

const SearchForm = ({ register, loading }) => {
  const [value, setValue] = useState('')
  return (
    <>
      <FormControl label={() => 'Artist name'}>
        <Input
          {...register('artist')}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Artist name"
          overrides={{
            ...baseui.input,
          }}
        />
      </FormControl>
      <Button isLoading={loading}>Search</Button>
    </>
  )
}

export default SearchForm

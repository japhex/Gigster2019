import { useState } from 'react'

import { useLazyQuery } from '@apollo/react-hooks'
import { DatePicker } from 'baseui/datepicker'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'

import { searchGigQuery } from 'api/gigs/gigs'
import SearchForm from 'components/search/form'
import Results from 'components/search/results'
import { Choice } from 'components/search/styled/search.styled'
// import { Loader } from 'components/utils/styles/loaderStyled'
import { baseui } from 'themes/baseui/overrides'

const Search = () => {
  const { register, handleSubmit } = useForm()
  const [value, setValue] = useState([new Date()])
  const [choice, setChoice] = useState(false)
  const [searchGigAction, { data, loading }] = useLazyQuery(searchGigQuery)

  const onSubmit = async variables => {
    const dateFrom = value[0] ? format(value[0], 'yyyy-MM-dd') : ''
    const dateTo = value[1] ? format(value[1], 'yyyy-MM-dd') : ''
    await searchGigAction({
      variables: { ...variables, choice, dateFrom, dateTo },
    })
  }

  const onChoice = async userChoice => {
    setChoice(userChoice)
  }

  // if (loading) return <Loader />

  return (
    <>
      {!data ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div
            style={{
              width: '40%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '15px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                marginBottom: '30px',
              }}
            >
              <Choice selected={choice} onClick={() => onChoice(true)}>
                Past gig
              </Choice>
              <Choice selected={!choice} onClick={() => onChoice(false)}>
                Future gig
              </Choice>
            </div>
            <div>
              <DatePicker
                range
                quickSelect={choice}
                value={value}
                maxDate={choice ? new Date() : null}
                minDate={!choice ? new Date() : null}
                onChange={({ date }) =>
                  setValue(Array.isArray(date) ? date : [date])
                }
                overrides={{
                  ...baseui.nestedInput,
                  ...baseui.inputWrapper,
                }}
              />
            </div>
            <SearchForm register={register} loading={loading} />
          </div>
        </form>
      ) : (
        <Results gigs={data?.searchGig} />
      )}
    </>
  )
}

export default Search

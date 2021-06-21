import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'

import { createGigMutation, getGigs } from 'api/gigs/gigs'
import { Div } from 'components/gigs/styles/addGigManualStyled'
import { Input } from 'components/ui/forms/input'
import { Button } from 'components/utils/styles/formsStyled'
import { Buttons } from 'components/utils/styles/modalStyled'

const AddGigManual = ({ callback }) => {
  const { register, handleSubmit } = useForm()
  const [createGig, { loading }] = useMutation(createGigMutation, {
    refetchQueries: [{ query: getGigs }],
  })

  const onSubmit = async variables => {
    await createGig({ variables })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Div>
        <Input {...register('artist')} />
        <Input {...register('date')} type="date" />
        <Input {...register('venue')} />
      </Div>
      <Buttons>
        <Button isLoading={loading}>Create gig</Button>
        <Button onClick={callback} type="secondary">
          Cancel
        </Button>
      </Buttons>
    </form>
  )
}

export default AddGigManual

import { useMutation } from '@apollo/react-hooks'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { createGigMutation, getGigs } from 'api/gigs/gigs'
import { Div } from 'components/gigs/styles/add-gig-manual.styled'
import { Input } from 'components/ui/forms/input'
import { useForm } from 'react-hook-form'

interface Props {
  callback: () => void
}

const AddGigManual = ({ callback }: Props) => {
  const { register, handleSubmit } = useForm()
  const [createGig, { loading }] = useMutation(createGigMutation, {
    refetchQueries: [{ query: getGigs }],
  })

  // TODO: fix
  // @ts-ignore
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
      <ButtonGroup>
        <Button isLoading={loading}>Create gig</Button>
        <Button onClick={callback} variant="outline">
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  )
}

export default AddGigManual

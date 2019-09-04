import React, {useState} from 'react'
import {useMutation} from "@apollo/react-hooks"
import {Field, Form, Formik} from 'formik'
import {Input} from "components/utils/styled/Forms"
import {Buttons} from "components/utils/styled/ModalStyled"
import {Div} from "../GigStyled/AddManualGigStyled"
import GigSearchResults from './GigSearchResults'
import {searchGigMutation} from "api/gigs/gigs"
import {Button} from 'components/utils/styled/Forms'

const SearchForGig = ({callback}) => {
	const [gigs, setGigs] = useState([]);
	const [submittingForm, setSubmittingForm] = useState(false)
	const [searchGig] = useMutation(searchGigMutation, {
		update(cache, { data: { searchGig } }) {
			setGigs(searchGig)
		}
	});

	return (
		<Formik onSubmit={async (values) => {
			setSubmittingForm(true)
			await searchGig({variables: values})
			setSubmittingForm(false)
		}}
	        render={() => (
	            <>
			        <Form>
				        <Div>
					        <Field type="text" name="artist" render={({field}) => (
						        <Input type="text" name="artist" {...field} />
					        )}/>
				        </Div>
				        <Buttons>
					        <Button isLoading={submittingForm}>
						        Search
					        </Button>
					        <Button onClick={callback} secondary>
						        Cancel
					        </Button>
				        </Buttons>
			        </Form>

			        <GigSearchResults gigs={gigs} />
		        </>
	        )}
		/>
	)
}

export default SearchForGig;
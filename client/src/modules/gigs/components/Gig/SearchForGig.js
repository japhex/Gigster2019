import React, {useState} from 'react'
import {useMutation} from "@apollo/react-hooks"
import {Field, Form, Formik} from 'formik'
import {Input} from "baseui/input"
import {Buttons} from "components/utils/styled/ModalStyled"
import {Button, KIND, SIZE} from "baseui/button/index"
import {Div} from "../GigStyled/AddManualGigStyled"
import GigSearchResults from './GigSearchResults'
import {searchGigMutation} from "api/gigs/gigs"

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
					        <Button size={SIZE.compact} isLoading={submittingForm}>
						        Search
					        </Button>
					        <Button kind={KIND.secondary} size={SIZE.compact} onClick={callback}>
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
import styled from 'styled-components';
import * as variables from 'components/utils/styled/global/variables'
import Delete from "baseui/icon/delete"

export const DeleteGigContainer = styled.div`
	div {
		display:flex;
		cursor: pointer;
		margin-left:auto;
		color:  ${variables.brandColor};
		font-size: 1.5rem;
	}
`

export const DeleteIcon = styled(Delete)`
	margin-left:auto;
`
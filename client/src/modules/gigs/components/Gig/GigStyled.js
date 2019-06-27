import styled from 'styled-components';

export const GigContainer = styled.div`
	width: ${props => props.type === 'old' ? '100%' : '49%'};
    margin:5px 10px 0 0;
    margin-right: ${props => props.type === 'old' && 0};
    
    &:nth-child(2) {
        margin-right: 0;
    }
`
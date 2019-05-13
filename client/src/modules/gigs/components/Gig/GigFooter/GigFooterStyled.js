import styled from 'styled-components';

export const Div = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-end;
  padding-top:10px;
  
  button {
    margin-right:10px;
    
    &:last-child {
      margin-right:0;
    }
  }
`

export const Span = styled.span`
	margin-right:10px;
`
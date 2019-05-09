import styled from 'styled-components';

export const Div = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-end;
  
  button {
    margin-right:10px;
    
    &:last-child {
      margin-right:0;
    }
  }
`
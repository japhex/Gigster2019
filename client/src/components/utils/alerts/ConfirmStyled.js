import styled from 'styled-components';

export const Div = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  background: ${({active}) => active ? 'rgba(255, 255, 255, 0.8)' : 'none'};
`
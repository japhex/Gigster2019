import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`

export const Loader = styled.div`
  &:after {
    content: ' ';
    display: block;
    width: 20px;
    height: 20px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #f44242;
    border-color: #f44242 transparent #f44242 transparent;
    animation: loader 1.2s linear infinite;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

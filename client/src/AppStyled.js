import styled from 'styled-components'

export const AppStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  body {
    background: #fafbfc;

    * {
      font-family: 'Roboto Slab', serif;
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  .gigster {
    padding: 30px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`

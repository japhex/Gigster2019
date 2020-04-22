import styled from 'styled-components'

export const UserList = styled.ul`
  display: ${(props) => (props.users.length > 0 ? 'block' : 'none')};
  position: absolute;
  top: 46px;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);

  li {
    display: block;
    padding: 15px 20px;
    cursor: pointer;

    &:hover {
      background: #f5f7fa;
    }

    a {
      display: block;
      color: #353e4a;
    }
  }
`

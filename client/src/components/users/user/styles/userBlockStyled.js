import styled from 'styled-components'

export const UserSidebar = styled.ul`
  .user {
    &-sidebar {
      flex: 1;
    }

    &-username {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-gigs {
      display: flex;
      flex-wrap: wrap;
      flex: 5;

      li {
        flex: 1 0 23%;
      }
    }
  }
`

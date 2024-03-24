import styled from "styled-components";

export const AdminHeaderContainer = styled.div`
    border: 1px solid green;
    display: flex;
    height: 7vh;
    background-color: white;
    margin-bottom: 4vh;
    /* width: 80%; */
`

export const AdminSearchbarContainer = styled.div`
    border: 1px solid grey;
    border-radius:8px;
    display: flex;
    margin-top: 1vh;
    margin-left: 2.5vw;
    margin-right: 16vw;
    padding: 0 0.5vw;
    height: 5vh;
    opacity: 50%;

    .admin-header-search-icon{
        border: none;
        margin-right: 0.5rem;
        margin-top: 1vh;
        color: grey;
    }
    .admin-header-searchbar{
        border: none;
        font-size: 1vw;
        width: 40vw;
    }
`

export const AdminUserImageContainer = styled.div`
    border: 1px solid red;
    display: flex;
    flex-wrap:nowrap;
    width: 18vw;

    .admin-header-notification-icon{
        color: grey;
        margin-top: 1.5vh;
        margin-right: 0.5vw;
    }

    .admin-header-user-icon{
        margin-right: 0.5vw;
    }

    .admin-header-user-name{
        color: grey;
        margin-top: 1.3vh;
    }
`


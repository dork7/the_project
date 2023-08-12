import styled from 'styled-components'


export const NavContainer = styled.div`
    padding: 2rem;
    background-color: #e4e4e4;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const NavItemContainer = styled.div` 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    p   {
        font-weight: 800;
        padding: 10px 15px;
        cursor: pointer;
    }
`;

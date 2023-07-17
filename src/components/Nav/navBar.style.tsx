import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const NavigationContainer = styled.div`
    padding: 2rem;
    background - color: #e4e4e4;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const NavLinks = styled(Link)`
            font-weight: 800;
            margin: 10px 15px;
            cursor: pointer;
 `
export const LoginLogout = styled.div`
    font-weight: 800;
    margin: 10px 15px;
    cursor: pointer;
 `

export const NavItems = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
        width: 100%;
`
import styled from 'styled-components';

export const BaseButton = styled.button`
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
`

export const GoogleSignIn = styled(BaseButton)`
    background- color: #4285f4;
    color: white;
    &:hover {
        background - color: #357ae8;
        border: none;
    }
`

export const InvertedButton = styled(BaseButton)`
    background - color: white;
    color: black;
    border: 1px solid black;

    &:hover {
    background - color: black;
    color: white;
    border: none;
    }
 `

export const SlideButton = styled.button`
    background: linear - gradient(to right, #fff 50 %, #000 50 %);
    background - size: 200 % 100 %;
    background - position: 0 0;
    -webkit - transition: background - position .3s ease - out;
    -moz - transition: background - position .3s ease - out;
    transition: background - position .3s ease - out;
    border: 1px solid black;

    &:hover {
        background - position: -100 % 0;
        color: #fff
    }
`
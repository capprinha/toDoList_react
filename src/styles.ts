import {createGlobalStyle} from "styled-components";

export const colors = {
    background: '#574759',
    shadow: '#1a1b1c',
    red: '#ed6464',
    redLight: '#87586c',
    text: '#fff',
    gray: '#ccc'
}
export const Container = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }   

    .container{
        max-width: 1024px;
        margin: 0 auto;
        width: 100%;
        height: 100vh;
    }

    .backgroundColor{
        background-color: ${colors.background}
    }
`


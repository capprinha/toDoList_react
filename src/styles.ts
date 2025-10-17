import {createGlobalStyle} from "styled-components";


export const colors = {
    roxoEscuro: '#270021',
    roxoClaro: '#7d0d7d',
    roxoMeio: '#52064f',
    alternativaEscura: '#3d0338',
    alternativaClara: '#680a66',
    textColor: '#fff'
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
        background-color: ${colors.alternativaClara};
    }
`


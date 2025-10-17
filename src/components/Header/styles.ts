import styled from "styled-components";
import { colors } from "../../styles";


export const Head = styled.header`
    
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`
export const Title = styled.h1`
    font-size: 2em;
    color: ${colors.textColor};
    text-align: center;
    padding: 32px 0;
`

export const Input = styled.input`
    padding: 8px 16px;
    border-radius:16px;
    border: 3px solid ${colors.roxoEscuro};
    text-align: center;
    outline: none;
    width: 70%;
    margin-bottom: 8px;
    font-size: 1.1em;
    font-style: italic;
`

export const Button = styled.button`
    padding: 8px 16px;
    border-radius:16px;
    border: 3px solid ${colors.roxoEscuro};
    text-align: center;
    outline: none;
    width: 60%;
    margin-bottom: 8px;
    font-size: 1.1em;
    cursor: pointer;
`
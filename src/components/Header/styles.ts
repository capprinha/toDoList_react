import styled from "styled-components";
import { colors } from "../../styles";


export const Head = styled.header`
    padding-top: 32px;

    > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${colors.gray};
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    p {
        text-align: center;
    }

`
export const Title = styled.h1`
    font-size: 2em;
    color: #fff;
    text-align: center;
    padding: 16px 0;
`

export const Input = styled.input`
    margin: 16px 0;
    padding: 4px;
    width: 95%;
    text-align: center;
    font-weight: bold;
    border: none;
    border-bottom: 2px solid ${colors.shadow};
    color: ${colors.shadow};
    background-color: transparent;
    outline: none;
`

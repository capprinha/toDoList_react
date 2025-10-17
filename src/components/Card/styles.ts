import styled from "styled-components";
import { colors } from "../../styles";

export const CardContainer = styled.div`
    background-color: ${colors.roxoEscuro};
    color: ${colors.textColor};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 16px 0;
    margin: 32px 0;
    border: 3px solid ${colors.roxoClaro};
    border-radius: 16px;
    /* height: 80vh;
    overflow-y: scroll; */

    input{
        transform: scale(2);
        margin-left: 16px;
    }

    .taskContainer{
        margin-left: 32px;

        p{
            font-style:italic;
        }

        .taskCompleted{
            text-decoration: line-through;
        }
    }
`
import styled from "styled-components";
import { colors } from "../../styles";


export const CardContainer = styled.div`
    background-color: ${colors.gray};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 16px 0;
    margin: 32px 0; 
    position: relative;

        input{
            transform: scale(2);
            margin-left: 16px;
        }

        .button {
            position: absolute;
            right: 10px;
            color: ${colors.text};
            background-color: ${colors.red};
            border: none;
            outline: none;
            cursor: pointer;
            padding: 4px 8px;
            font-size: 1.2em;
            font-weight: bold;
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
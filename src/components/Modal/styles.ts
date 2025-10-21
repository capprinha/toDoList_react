import styled from "styled-components";
import { colors } from "../../styles";

export const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    color: ${colors.text};
    
    div{
        background-color: ${colors.gray};
        
            input {
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
                &::placeholder{
                    color: ${colors.shadow};
                }
        }
    }
`
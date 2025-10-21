import styled from "styled-components";

import { colors } from "../../styles";

import { ButtonProps} from './index'

type Props = Omit<ButtonProps, 'title'>
export const Buton = styled.button<Props>`
    background-color: ${colors.red};
    width: ${props => props.size === 'big' ? '100%' : '60%'};
    padding: 8px 0;
    border: none;
    font-size: 1.5em;
    font-weight: bold;
    color: ${colors.text};
    cursor: pointer;
`
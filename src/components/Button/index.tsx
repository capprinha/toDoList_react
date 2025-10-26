
import { Buton } from './styles'

export type ButtonProps = {
    title: string
    size?: 'big' | 'small'
    onClick: () => void
    disabled?:() => void
}

const Button = ({ title, size, onClick,disabled }:ButtonProps) => {

    return(
        <Buton disabled={disabled} onClick={onClick} size={size}>{title}</Buton>
    )
}

export default Button
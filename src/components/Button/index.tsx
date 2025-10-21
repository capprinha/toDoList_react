
import { Buton } from './styles'

export type ButtonProps = {
    title: string
    size?: 'big' | 'small'
    onClick: () => void
}

const Button = ({ title, size, onClick }:ButtonProps) => {

    return(
        <Buton onClick={onClick} size={size}>{title}</Buton>
    )
}

export default Button
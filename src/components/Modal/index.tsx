import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Button from "../Button"

import { ModalContainer } from './styles';
import { addNameUser } from '../../store/reducers/task';

type ModalProps = {
    onClick: () => void
}
const Modal = ({onClick}:ModalProps) => {

    const dispatch = useDispatch()
    const [ name, setName ] = useState('')

    return(
        <ModalContainer>
            <div>
                <h1>To Do List</h1>
                <input required type="text" placeholder="Digite seu nome" value={name}  onBlur={(e) => dispatch(addNameUser(e.target.value))} onChange={e => setName(e.target.value)}/>
                <Button  onClick={onClick} 
                    title="Acessar" 
                    size="big"
                />
            </div>
        </ModalContainer>
    )
}

export default Modal
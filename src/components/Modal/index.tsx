import { ModalContainer } from './styles';

import Button from "../Button"
import { useDispatch } from 'react-redux';
import { useState } from 'react';
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
                <input required type="text" placeholder="Digite seu nome" onChange={e => setName(e.target.value)}/>
                <Button  onClick={() => {dispatch(addNameUser(name)); onClick()}} title="Acessar" size="big"></Button> 
            </div>
        </ModalContainer>
    )
}

export default Modal
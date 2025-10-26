import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useState } from "react"

import Button from "../Button"

import { Title, Input, Head } from "./styles"
import { add, TaskProps } from '../../store/reducers/task'
import { RootReducer } from "../../store"


const Header = () => {

    const dispatch = useDispatch()
    const { nameUser,list } = useSelector((state: RootReducer) => state.task)

    const [ task , setTask ] = useState<TaskProps>({
        taskTitle:'',
        taskDescription: ''
    })
    const [ inputFilled, setInputFilled ] = useState('')

    async function mandarDados() {
        try{
            if(task.taskTitle !== ''){
                const res = await fetch('http://localhost:3001/task',{
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(task)
                })
                const data = await res.json()
                dispatch(add(data))
                setTask({
                    taskTitle: '',
                    taskDescription: ''
                })
                setInputFilled('')
            } else {
                setInputFilled('Digite o nome da tarefa')
            }
        } 
        catch(error){
            console.error(error)
        }
    }
    

    return(
        <Head>
            <div>
                <Title>Olá {nameUser}</Title>
                <p>Você tem {list.length} tarefa(s)</p>
                <div>
                    <Input required type="text" placeholder="Tarefa" value={task.taskTitle} onChange={e => setTask({...task, taskTitle: e.target.value})}/>
                    <Input type="text" placeholder="Descrição" value={task.taskDescription} onChange={e => setTask({...task, taskDescription: e.target.value})}/>
                    <span>{inputFilled}</span>
                    <Button size="big" title="Adicionar Tarefa" onClick={() => mandarDados()} />
                </div>
            </div>
        </Head>
    )
}

export default Header
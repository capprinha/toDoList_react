import { useDispatch } from "react-redux"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"

import Button from "../Button"

import { Title, Input, Head } from "./styles"

import { add, TaskProps } from '../../store/reducers/task'

const Header = () => {

    const dispatch = useDispatch()
    const { nameUser,list } = useSelector((state: RootReducer) => state.task)

    const [ task , setTask ] = useState<TaskProps>({
        taskTitle:'',
        taskDescription: ''
    })

    async function mandarDados() {
        try{
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
                    <Button size="big" title="Adicionar Tarefa" onClick={() => mandarDados()}/>
                </div>
            </div>
        </Head>
    )
}

export default Header
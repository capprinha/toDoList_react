import { useDispatch } from "react-redux"
import { useState } from "react"

import { Title, Input, Head, Button } from "./styles"

import { add, TaskProps } from '../../store/reducers/task'

const Header = () => {

    const dispatch = useDispatch()

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
            } 
            catch(error){
                console.error(error)
            }
        }
    

    return(
        <Head>
            <Title>To Do List</Title>
            <div>
                <Input type="text" placeholder="Tarefa" onChange={e => setTask({...task, taskTitle: e.target.value})}/>
                <Input type="text" placeholder="Descrição" onChange={e => setTask({...task, taskDescription: e.target.value})}/>
                <Button onClick={mandarDados}>Adicionar tarefa</Button>
            </div>
        </Head>
    )
}

export default Header
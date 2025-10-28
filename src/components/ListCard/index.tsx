import { useSelector } from "react-redux"

import Card from "../Card"

import { ListCardContainer } from "./styles"
import { RootReducer } from "../../store"
import { useDispatch } from "react-redux"
import { add, deleteTask, setTasks } from "../../store/reducers/task"
import { useEffect } from "react"

const ListCard = () => {
    const tasks = useSelector((state: RootReducer) => state.task.list)
    const dispatch = useDispatch()

    async function deleteDados(id: string) {
        try {
            await fetch(`http://localhost:3001/task/${id}`, {
                method: 'DELETE'
            })
            dispatch(deleteTask(id))
    } catch(error){
        console.error(error)
        }
    } 
    
    useEffect(() => {
        async function setTask() {
            try{
                const res = await fetch('http://localhost:3001/task')
                const data = await res.json()
                dispatch(setTasks(data))
                console.log(data)
            } catch(e){
                console.log(e)
            }
        }
        setTask()
    }, [dispatch])

    return(
        <ListCardContainer>
            {tasks.map(task => (
                <Card key={task.id}
                author={task.tasksAutor}
                title={task.taskTitle} 
                description={task.taskDescription} 
                id={task.id} 
                onClick={() => {deleteDados(task.id!)}}/>
            ))}
        </ListCardContainer>
    )
}

export default ListCard
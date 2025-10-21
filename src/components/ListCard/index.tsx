import { useSelector } from "react-redux"

import Card from "../Card"

import { ListCardContainer } from "./styles"
import { RootReducer } from "../../store"
import { useDispatch } from "react-redux"
import { deleteTask } from "../../store/reducers/task"



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

    return(
        <ListCardContainer>
            {tasks.map(task => (
                <Card key={task.id}
                title={task.taskTitle} 
                description={task.taskDescription} 
                id={task.id} 
                onClick={() => {deleteDados(task.id!)}}/>
            ))}
        </ListCardContainer>
    )
}

export default ListCard
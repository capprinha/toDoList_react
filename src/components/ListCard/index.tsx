import { useSelector } from "react-redux"

import Card from "../Card"

import { ListCardContainer } from "./styles"
import { RootReducer } from "../../store"

const ListCard = () => {

    const tasks = useSelector((state: RootReducer) => state.task.list)
    return(
        <ListCardContainer>
            {tasks.map(task => (
                <Card key={task.id} title={task.taskTitle} description={task.taskDescription}/>
            ))}
        </ListCardContainer>
    )
}

export default ListCard
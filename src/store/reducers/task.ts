import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type TaskProps = {
    id?: string,
    taskTitle: string,
    taskDescription: string
}

type ListTask = {
    list: TaskProps[]
        nameUser: string
}
const initialState: ListTask = {
    list: [],
    nameUser: ''
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers:{
        add: (state, action: PayloadAction<TaskProps> ) => {
            state.list.push(action.payload)
            
        },
        addNameUser: (state, action: PayloadAction<string>) => {
            state.nameUser = action.payload
        },
        deleteTask: (state, action:PayloadAction<string>) => {
            state.list = state.list.filter(task => task.id !== action.payload)
        }
    }
})

export const { add, addNameUser, deleteTask } = taskSlice.actions
export default taskSlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type TaskProps = {
    id?: number,
    taskTitle: string,
    taskDescription: string
}

type ListTask = {
    list: TaskProps[]
    isCompleted: boolean
}
const initialState: ListTask = {
    list: [],
    isCompleted: false

}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers:{
        add: (state, action: PayloadAction<TaskProps> ) => {
            state.list.push(action.payload)
            
        },
        completed: (state) =>{
            state.isCompleted = true
        }
    }
})

export const { add, completed } = taskSlice.actions
export default taskSlice.reducer
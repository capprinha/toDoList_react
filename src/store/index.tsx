import { configureStore } from "@reduxjs/toolkit";

import task from './reducers/task'

export const store = configureStore({
    reducer: {
        task: task
    }
})

export type RootReducer = ReturnType<typeof store.getState>
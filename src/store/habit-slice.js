import { createSlice } from "@reduxjs/toolkit";


const habitSlice = createSlice({
    name: 'habits',
    initialState: {habits: []},
    reducers: {
        addHabit: (state, action) => {
            const newHabit = {
                id: Date.now().toString(),
                name: action.payload.name,
                frequency: action.payload.frequency,
                completedDates: [],
                createdAt: new Date().toISOString()
            }

            state.habits.push(newHabit)
        },
        toggleHabit: (state, action) => {
            const habit = state.habits.find(habit => habit.id === action.payload.id)

            if(habit) {
                const index = habit.completedDates.indexOf(action.payload.date)
                if(index > -1) {
                    habit.completedDates.splice(index, 1)
                } else {
                    habit.completedDates.push(action.payload.date)
                }
            }
        },
        removeHabit: (state, action) => {
            const filteredHabits = state.habits.filter(habit => habit.id !== action.payload.id)
            state.habits = filteredHabits

        }
    }
})

export const {addHabit, toggleHabit, removeHabit} = habitSlice.actions
export default habitSlice.reducer 
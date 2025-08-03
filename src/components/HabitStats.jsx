import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchHabits } from "../store/habit-slice"
import { Paper, Typography } from "@mui/material"

export default function HabitStats() {
    const {habits, isLoading, error} = useSelector((state) => state.habits)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHabits())
    }, [])

    return (
        <Paper elevation={2} sx={{p: 2, mt: 4}}>
            <Typography variant="h6" gutterBottom>
                Habit Stats
            </Typography>
            <Typography variant="body1">
                Total Habits:
            </Typography>
            <Typography variant="body1">
                Completed Today: 
            </Typography>
            <Typography variant="body1">
                Total Habits:
            </Typography>
        </Paper>
    )
}
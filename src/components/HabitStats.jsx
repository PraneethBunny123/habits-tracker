import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchHabits } from "../store/habit-slice"
import { LinearProgress, Paper, Typography } from "@mui/material"
import { getStreak, getTodayDate } from "../util/util"

export default function HabitStats() {
    const {habits, isLoading, error} = useSelector((state) => state.habits)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHabits())
    }, [])

    function getCompletedToday() {
        const today = getTodayDate()
        return habits.filter(habit => habit.completedDates.includes(today)).length
    }

    function getLongestStreak() {
        return Math.max(...habits.map(getStreak), 0)
    }

    if(isLoading) {
        return <LinearProgress />
    }

     if(error) {
        return <Typography color="error">{error}</Typography>
     }

    return (
        <Paper elevation={2} sx={{p: 2, mt: 4}}>
            <Typography variant="h6" gutterBottom>
                Habit Stats
            </Typography>
            <Typography variant="body1">
                Total Habits: {habits.length}
            </Typography>
            <Typography variant="body1">
                Completed Today: {getCompletedToday()}
            </Typography>
            <Typography variant="body1">
                Longest Streak: {getLongestStreak()}
            </Typography>
        </Paper>
    )
}



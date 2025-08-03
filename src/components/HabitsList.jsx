import { CheckCircle, DeleteOutline } from "@mui/icons-material"
import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { removeHabit, toggleHabit } from "../store/habit-slice"

export default function HabitsList() {
    const {habits} = useSelector((state) => state.habits)

    const dispatch = useDispatch()

    const today = new Date().toISOString().split("T")[0]

    function getStreak(habit) {
        let streak = 0;
        const currentDate = new Date()

        while(true) {
            const dateString = currentDate.toISOString().split('T')[0]

            if(habit.completedDates.includes(dateString)) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1)
            } else {
                break;
            }
        }
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 4
        }}>
            {habits.map(habit => (
                <Paper  
                    key={habit.id} 
                    elevation={2}
                    sx={{p:2}}
                >
                    <Grid container alignItems="center" spacing={2}>
                        <Grid xs={12} sm={6}>
                            <Typography variant="h6">{habit.name}</Typography>
                            <Typography 
                                variant="body2"
                                color="text.secondary"
                                sx={{textTransform: 'capitalize'}}
                            >
                                {habit.frequency}
                            </Typography>
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                gap: 1
                            }}>
                                <Button 
                                    variant="outlined"
                                    color={habit.completedDates.includes(today) ? "success" : "primary"}
                                    startIcon={<CheckCircle />}
                                    onClick={() => dispatch(toggleHabit({id: habit.id, date: today}))}
                                >
                                    {habit.completedDates.includes(today) ? "Completed" : "Mark Complete"}
                                </Button> 
                                <Button 
                                    variant="outlined"
                                    color="error"
                                    startIcon={<DeleteOutline />}
                                    onClick={() => dispatch(removeHabit({id: habit.id}))}
                                >
                                    Remove
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </Box>
    )
}
import { Box, Grid, Paper, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export default function HabitsList() {
    const {habits} = useSelector((state) => state.habits)

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
                    <Grid container alignItems="center">
                        <Grid>
                            <Typography variant="h6">{habit.name}</Typography>
                            <Typography 
                                variant="body2"
                                color="text.secondary"
                                sx={{textTransform: 'capitalize'}}
                            >
                                {habit.frequency}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </Box>
    )
}
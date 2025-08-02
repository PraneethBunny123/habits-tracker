import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

export default function HabitForm() {
    const [name, setName] = useState("")
    const [frequency, setFrequency] = useState("daily")

    return (
        <form>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}>
                <TextField 
                    label="Habit Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter a habit"
                    fullWidth
                />
                <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                    >
                        <MenuItem value="daily">Daily</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </form>
    )
}
import { Provider } from "react-redux"
import store from './store/store'
import { Container, Typography } from "@mui/material"
import HabitForm from "./components/HabitForm"
import HabitsList from "./components/HabitsList"

function App() {
    return (
        <Provider store={store}>
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" align="center">
                    Habits Tracker
                </Typography>
                <HabitForm />
                <HabitsList />
            </Container>
        </Provider>
    )
}

export default App

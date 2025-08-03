import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchHabits } from "../store/habit-slice"

export default function HabitStats() {
    const {habits, isLoading, error} = useSelector((state) => state.habits)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHabits())
    }, [])

    return (
        <div>Stats</div>
    )
}
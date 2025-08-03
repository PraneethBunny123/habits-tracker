export function getStreak(habit) {
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
    return streak
}

export function getTodayDate() {
    const today = new Date().toISOString().split("T")[0]
    return today
}
const getTasksDates = () => {
    const tasks = getTasksParsed()
    const tasksDates = []
    if (tasks.length > 0) {

        tasks.forEach(task => {
            if (!tasksDates.includes(task.date)) {
                tasksDates.push(task.date)
            }
        })
        tasksDates.sort()

        return tasksDates;
    }
}

const getTasksParsed = () => {
    return JSON.parse(localStorage.getItem("tasks") || [])
}

export const getTaskService = {
    getTasksDates,
    getTasksParsed
}
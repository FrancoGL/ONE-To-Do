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
    const tasks = localStorage.getItem("tasks") || []
    if (tasks.length > 0) {
        return JSON.parse(tasks)
    } else {
        return tasks
    }
}

export const getTaskService = {
    getTasksDates,
    getTasksParsed
}
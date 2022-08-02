export const getTasksDates = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
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
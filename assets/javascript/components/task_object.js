/**
 * Task object
 * @returns {{date: number, id: number, completed: boolean, value: string}}
 */
export const taskObject = (value, date) => {

    return {
        id: Math.floor(Math.random() * 1000),
        value,
        date,
        completed: false
    }
}
/**
 * Default object to note
 * @returns {{date: number, id: number, completed: boolean, value: string}}
 */
export const noteObject = (value, date) => {

    return {
        id: Math.floor(Math.random() * 1000),
        value,
        date,
        completed: false
    }
}
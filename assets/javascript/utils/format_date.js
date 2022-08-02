export const formatDate = (date) => {
    return new Date(date).toLocaleDateString(navigator.language,{timeZone: "UTC"})
}

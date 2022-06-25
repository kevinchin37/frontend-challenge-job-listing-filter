// not the best, but would okay for this project
// would not work if there is the duplicate identifier (languages in this case)
export const generateUniqueKey = (identifier) => {
    return `_${identifier}_${new Date().getTime()}`;
}
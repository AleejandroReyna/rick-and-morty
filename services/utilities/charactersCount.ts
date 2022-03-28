export const charactersCount = (items : any[], coincidence : string) : number => {
    // Define regex with lowercase (Case insensitive condition)
    const re = new RegExp(coincidence.toLowerCase(), 'g')
    // Get names for data objects in an array
    const names : string[] = items.map(item => item.name.toLowerCase())
    // Generate array with coincidences length for name
    const coincidences : number[] = names.map(name =>  name.match(re)?.length || 0)
    // return sum of coincidences in array
    return coincidences.reduce((_c, _v) => _c + _v);
}
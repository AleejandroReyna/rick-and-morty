const baseUri = 'https://rickandmortyapi.com/api'

export const apiRequest = (resource : string, page : number) : Promise<Response> => {
        return fetch(`${baseUri}/${resource}?page=${page}`, {})
}

const baseUri = 'https://rickandmortyapi.com/api'

export const apiRequest = (resource : string) : Promise<Response> => {
        return fetch(`${baseUri}/${resource}`, {})
}

import { IManager, ICharacter, IResponse, ILocation, IEpisode } from './interfaces.ts'
import { apiRequest } from '../requests/apiRequest.ts'

export class DataManager implements IManager{
    resource : string
    total : number

    constructor(resource: string, total : number) {
        this.resource = resource
        this.total = total
    }
    
    fetchData = () : Promise<IResponse[]> => {
        let pageTotal : number = this.total / 20
        this.total % 20 && pageTotal++
        const promises = Array.from({length: Math.floor(pageTotal)}, async (_, i) => {
            const request = await apiRequest(this.resource, i + 1)
            return request.json()
        })
        const promise = Promise.all(promises)
        return promise
    }

    getData = async () : Promise<(ICharacter|ILocation|IEpisode)[]> => {
        try {
            const dataset = await this.fetchData()
            return dataset.map(item => item.results).flat()
        } catch(e) {
            throw e
        }
    }
}
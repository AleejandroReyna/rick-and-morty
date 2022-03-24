import { IManager} from './interfaces.ts'
import { apiRequest } from '../requests/apiRequest.ts'

export class DataManager implements IManager{
    resource : string
    total : number

    constructor(resource: string, total : number) {
        this.resource = resource
        this.total = total
    }
    
    fetchData = () => {
        let pageTotal : number = this.total / 20
        this.total % 20 && pageTotal++
        const promises = Array.from({length: Math.floor(pageTotal)}, async (_, i) => {
            const request = await apiRequest(this.resource, i + 1)
            return request.json()
        })
        return Promise.all(promises)
    }

    getData = async () => {
        try {
            const request = await this.fetchData()
            const data = [].concat(...request.map(item => item.results))
            return data
        } catch(e) {
            throw e
        }
    }
}
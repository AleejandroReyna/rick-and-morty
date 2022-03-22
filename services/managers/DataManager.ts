import { apiRequest } from '../requests/apiRequest.ts'
import { IManager} from './interfaces.ts'

export class DataManager implements IManager{
    resource = ''
    total = 0
    data = []

    constructor(resource: string, total : number) {
        this.resource = resource
        this.total = total
    }
    
    getData = async () => {
        const promises = []
        // Get total pages by number of items
        let pageTotal : number = this.total / 20
        this.total % 20 && pageTotal++
        for (let page = 1; page <= pageTotal; page++) {
            const request = await apiRequest(this.resource, page)
            promises.push(request.json())
        }
        return Promise.all(promises)
    }
}
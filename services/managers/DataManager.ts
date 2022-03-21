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
        for (let page = 1; page <= (this.total / 20) + 1; page++) {
            const request = await apiRequest(this.resource, page)
            promises.push(request.json())
        }
        return Promise.all(promises)
    }
}
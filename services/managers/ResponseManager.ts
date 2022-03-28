import { charactersCount } from '../utilities/charactersCount.ts'

export class ResponseManager {
    resource : string
    data : any[]

    constructor(resource: string, data : any[]) {
        this.resource = resource
        this.data = data
    }

    generateResponse(search : string) {
        try {
            const startTime = performance.now()
            const { resource } = this
            const count = charactersCount(this.data, search)
            const endTime = performance.now()
            const time = endTime - startTime
            return {
                count,
                resource,
                time,
                in_time: time < 2500 ? true : false
            }
        } catch(e) {
            throw e
        }
    }
}
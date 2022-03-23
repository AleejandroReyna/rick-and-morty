import { DataManager } from './DataManager.ts'
import { charactersCount } from '../utilities/charactersCount.ts'

export class ResponseManager {
    manager : DataManager

    constructor(manager : DataManager) {
        this.manager = manager
    }

    async generateResponse(search : string) {
        try {
            const { resource } = this.manager
            const startTime = performance.now()
            const data = await this.manager.getData()
            const count = await charactersCount(data, search)
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
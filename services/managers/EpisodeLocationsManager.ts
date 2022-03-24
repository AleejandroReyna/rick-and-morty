import { IExerciseManager, ExerciseResponse } from './interfaces.ts'
import { DataManager } from './DataManager.ts'

export class EpisodeLocationsManager implements IExerciseManager {
    name : string
    params : object

    constructor(name : string, params : object) {
        this.name = name
        this.params = params
    }

    executeExercise = async () : Promise<ExerciseResponse> =>{
        const startTime = performance.now()
        const promises = Object.entries(this.params).map(item => {
            const [_key, param ] = item
            const manager = new DataManager(param.resource, param.total)
            return manager.getData()
        })
        const [listData, throughData] = await Promise.all(promises)
        const list = listData.map(itemList => {
            const {name, episode, characters } = itemList
            const chars = [...characters]
            const through = throughData.filter(item => chars.includes(item['url']))
            const locations = [...new Set(through.map(c => c['location']['name']))]
            return {
                name,
                episode,
                locations
            }
        })
        const endTime = performance.now()
        const time = endTime - startTime
        return {
            exercise_name: this.name,
            time,
            in_time: time < 2500,
            results: list
        }
    }
}
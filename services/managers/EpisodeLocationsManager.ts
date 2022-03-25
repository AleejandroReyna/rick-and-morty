import { IExerciseManager, ExerciseResponse, IEpisodeLocationsParams } from './interfaces.ts'

export class EpisodeLocationsManager implements IExerciseManager {
    name : string
    params : IEpisodeLocationsParams

    constructor(name : string, params : IEpisodeLocationsParams) {
        this.name = name
        this.params = params
    }

    executeExercise = async (startTime : number) : Promise<ExerciseResponse> =>{
        const {list, through} = this.params
        const results = await list.map(itemList => {
            const {name, episode, characters } = itemList
            const t = through.filter(item => characters.includes(item['url']))
            const locations = [...new Set(t.map(c => c['location']['name']))]
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
            results
        }
    }
}
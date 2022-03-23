import { IExerciseManager, ExerciseResponse, ICountExerciseParams } from './interfaces.ts'
import { DataManager } from './DataManager.ts'
import { ResponseManager } from './ResponseManager.ts'

export class CountExerciseManager implements IExerciseManager {
    name : string
    params: ICountExerciseParams[]
    
    constructor(name : string, params: ICountExerciseParams[]) {
        this.name = name
        this.params = params
    }

    executeExercise = async () : Promise<ExerciseResponse> => {
        const startTime = performance.now()
        const promises = this.params.map(param => {
            const manager = new DataManager(param.resource, param.total)
            const responseManager = new ResponseManager(manager)
            return responseManager.generateResponse(param.search)
        })
        const results = await Promise.all(promises)
        const endTime = performance.now()
        const time = endTime - startTime
        return {
            exercise_name: this.name,
            time,
            in_time: time < 1000,
            results
        }
    }

}
import { IExerciseManager, ExerciseResponse, ICountExerciseParams } from './interfaces.ts'
import { ResponseManager } from './ResponseManager.ts'

export class CountExerciseManager implements IExerciseManager {
    name : string
    params: any[]
    
    constructor(name : string, params: any[]) {
        this.name = name
        this.params = params
    }

    executeExercise = async () : Promise<ExerciseResponse> => {
        const startTime = performance.now()
        const promises = this.params.map(param => {
            const responseManager = new ResponseManager(param.resource, param.data)
            return responseManager.generateResponse(param.search)
        })
        const results = await Promise.all(promises)
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
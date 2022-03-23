export interface IManager {
    resource: string
    total: number
    // ! to fix: Set abstract interface for api responses
    fetchData: () => Promise<any[]>
    getData: () => Promise<any[]>
}

export interface ExerciseResponse {
    exercise_name: string
    time: number
    in_time: boolean,
    results: any
}

export interface IExerciseManager {
    name: string,
    executeExercise: () => Promise<ExerciseResponse>
}

export interface ICountExerciseParams {
    resource: string,
    total: number,
    search: string
}
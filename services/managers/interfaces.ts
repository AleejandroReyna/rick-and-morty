export interface ICharacter {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string

}

export interface ILocation {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: string[],
    url: string,
    created: string
}

export interface IEpisode {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}

export interface IResponse {
    info: {
        count: number,
        pages: number,
        next: string | null,
        prev: string | null
    },
    results: Array<ICharacter | ILocation | IEpisode>
}

export interface IManager {
    resource: string
    total: number
    fetchData: () => Promise<IResponse[]>
    getData: () => Promise<(ICharacter|ILocation|IEpisode)[]>
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

export interface IEpisodeLocationsParams {
    list: (ICharacter|ILocation|IEpisode)[],
    through: (ICharacter|ILocation|IEpisode)[]
}
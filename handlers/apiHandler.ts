import { Response } from "../depts.ts"
import { DataManager } from '../services/managers/DataManager.ts'
import { ResponseManager } from '../services/managers/ResponseManager.ts'

// Route for Home page 
export const getInfo = async ({ response } : { response : Response }) => {
    
    // create data managers
    const characterManager = new DataManager('character', 826)
    const locationManager = new DataManager('location', 126)
    const episodeManager = new DataManager('episode', 51)

    // create response managers
    const responseCharacterManager = new ResponseManager(characterManager)
    const responseLocationManager = new ResponseManager(locationManager)
    const responseEpisodeManager = new ResponseManager(episodeManager)

    const results = await Promise.all([
        responseCharacterManager.generateResponse("c"),
        responseLocationManager.generateResponse("l"),
        responseEpisodeManager.generateResponse("e")
    ])
    
    response.status = 200
    response.body = {
        results
    }
    return response
};
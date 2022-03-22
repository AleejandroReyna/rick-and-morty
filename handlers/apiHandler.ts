import { Response } from "../depts.ts"
import { DataManager } from '../services/managers/DataManager.ts'
import { charactersCount } from '../services/utilities/charactersCount.ts'

// Route for Home page 
export const getInfo = async ({ response } : { response : Response }) => {
    
    // create managers
    const characterManager = new DataManager('character', 826)
    const locationManager = new DataManager('location', 126)
    const episodeManager = new DataManager('episode', 51)

    //get data from managers
    const locationData = await locationManager.getData()
    const locationCount = charactersCount(locationData, 'a')
    
    //const characterData = await characterManager.getData()
    //const episodeData = await episodeManager.getData()
    
    response.status = 200
    response.body = {
        coincidences: locationCount
    }
    return response
};
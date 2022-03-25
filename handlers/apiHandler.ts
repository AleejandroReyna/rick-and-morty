import { Response } from "../depts.ts"
import { CountExerciseManager} from '../services/managers/CountExerciseManager.ts'
import { EpisodeLocationsManager } from '../services/managers/EpisodeLocationsManager.ts'
import { 
  IEpisodeLocationsParams
 } from '../services/managers/interfaces.ts'
import { DataManager } from '../services/managers/DataManager.ts'

// Route for Home page 
export async function getInfo({ response }: { response: Response; }) {

  const startTime = performance.now()

  const params = [{ resource: 'character', total: 826},
                  { resource: 'location', total: 126},
                  { resource: 'episode', total: 51}]

  const [characterData, locationData, episodeData] = await Promise.all(
    params.map(param => {
      const manager = new DataManager(param.resource, param.total)
      return manager.getData()
    })
  )

  // create count exercise
  const countExerciseParams  = [
    { data: characterData, search: 'c' },
    { data: locationData, search: 'l' },
    { data: episodeData, search: 'e' },
  ];

  const countExercise = new CountExerciseManager('Char counter', countExerciseParams);
  const episodeLocationsParams : IEpisodeLocationsParams = {
    list: episodeData,
    through: characterData
  }
  const episodeLocationsExercise = new EpisodeLocationsManager('Episode Locations', episodeLocationsParams)

  const results = await Promise.all([
    countExercise.executeExercise(startTime),
    episodeLocationsExercise.executeExercise(startTime)
  ])

  response.status = 200;
  response.body = results
  return response;
}
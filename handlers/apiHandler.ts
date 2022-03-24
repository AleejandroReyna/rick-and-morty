import { Response } from "../depts.ts"
import { CountExerciseManager} from '../services/managers/CountExerciseManager.ts'
import { EpisodeLocationsManager } from '../services/managers/EpisodeLocationsManager.ts'
import { ICountExerciseParams} from '../services/managers/interfaces.ts'

// Route for Home page 
export async function getInfo({ response }: { response: Response; }) {

  // create count exercise
  const countExerciseParams: ICountExerciseParams[] = [
    { resource: 'character', total: 826, search: 'c' },
    { resource: 'location', total: 126, search: 'l' },
    { resource: 'episode', total: 51, search: 'e' },
  ];
  const countExercise = new CountExerciseManager('Char counter', countExerciseParams);
  const episodeLocationsParams = {
    list: {resource: 'episode', total: 51},
    through: {resource: 'character', total: 826}
  }
  const episodeLocationsExercise = new EpisodeLocationsManager('Episode Locations', episodeLocationsParams)

  const results = [
    await countExercise.executeExercise(),
    await episodeLocationsExercise.executeExercise()
  ]
  

  response.status = 200;
  response.body = results
  return response;
}
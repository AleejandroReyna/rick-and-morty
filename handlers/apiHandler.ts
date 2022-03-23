import { Response } from "../depts.ts"
import { CountExerciseManager} from '../services/managers/CountExerciseManager.ts'
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
  const countExerciseResult = await countExercise.executeExercise();

  response.status = 200;
  response.body = [
    countExerciseResult
  ];
  return response;
}
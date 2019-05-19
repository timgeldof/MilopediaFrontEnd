import { Muscle } from '../muscle.model'
import { Exercise } from 'src/app/exercise/exercise.model';

export class Athlete {
    constructor(
        private _id: number,
        private _firstName: string,
        private _lastName: string,        
        private _email: string,
        private _exercises: Exercise[]
    ) { }
    get id(): number { return this._id };
    get firstName(): string { return this._firstName; }
    get lastName(): string { return this._lastName; }
    get email(): string { return this._email; }
    get exercises(): Exercise[] { return this._exercises }

    static fromJSON(json: any): Athlete {
        let exercises: Exercise[] = json.exercises.map(e => Exercise.fromJSON(e));
        let rec = new Athlete(json.id, json.firstName, json.lastName, json.email, exercises)
        return rec;
    }
}
/*
{
  "id": 1,
  "firstName": "Tim",
  "lastName": "Geldof",
  "email": "tim.geldof@outlook.com",
  "athleteExercises": [
    {
      "athleteId": 1,
      "exerciseId": 2,
      "exercise": {
        "id": 2,
        "name": "Bench Press",
        "difficulty": 2,
        "youtubeURL": "https://www.youtube.com/watch?v=GIqcXj2pAPA",
        "description": null,
        "exerciseMuscles": []
      }
    },
    {
      "athleteId": 1,
      "exerciseId": 3,
      "exercise": {
        "id": 3,
        "name": "Barbell Row",
        "difficulty": 2,
        "youtubeURL": "https://www.youtube.com/watch?v=RQU8wZPbioA",
        "description": null,
        "exerciseMuscles": []
      }
    },
    {
      "athleteId": 1,
      "exerciseId": 4,
      "exercise": {
        "id": 4,
        "name": "Squat",
        "difficulty": 4,
        "youtubeURL": "https://www.youtube.com/watch?v=zoZWgTrZLd8",
        "description": null,
        "exerciseMuscles": []
      }
    },
    {
      "athleteId": 1,
      "exerciseId": 6,
      "exercise": {
        "id": 6,
        "name": "Deadlift",
        "difficulty": 4,
        "youtubeURL": "https://www.youtube.com/watch?v=u6UgD1H_AXw",
        "description": null,
        "exerciseMuscles": []
      }
    }
  ],
  "exercises": [
    {
      "id": 2,
      "name": "Bench Press",
      "difficulty": 2,
      "youtubeURL": "https://www.youtube.com/watch?v=GIqcXj2pAPA",
      "description": null,
      "exerciseMuscles": []
    },
    {
      "id": 3,
      "name": "Barbell Row",
      "difficulty": 2,
      "youtubeURL": "https://www.youtube.com/watch?v=RQU8wZPbioA",
      "description": null,
      "exerciseMuscles": []
    },
    {
      "id": 4,
      "name": "Squat",
      "difficulty": 4,
      "youtubeURL": "https://www.youtube.com/watch?v=zoZWgTrZLd8",
      "description": null,
      "exerciseMuscles": []
    },
    {
      "id": 6,
      "name": "Deadlift",
      "difficulty": 4,
      "youtubeURL": "https://www.youtube.com/watch?v=u6UgD1H_AXw",
      "description": null,
      "exerciseMuscles": []
    }
  ]
}

*/
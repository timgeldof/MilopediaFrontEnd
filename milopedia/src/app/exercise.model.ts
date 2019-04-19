import { Muscle } from './muscle.model'
export class Exercise {
    constructor(
        private _id: number,
        private _name: string,
        private _difficulty: number,
        private _youtubeURL: string,
        private _description: string,
        private _musclesUsed: Muscle[]
    ) { }
    get id(): number { return this._id };
    get name(): string { return this._name; }
    get difficulty(): number { return this._difficulty; }
    get youtubeURL(): string { return this._youtubeURL; }
    get description(): string { return this._description; }
    get musclesUsed(): Muscle[] { return this._musclesUsed }

    static fromJSON(json: any): Exercise {
        let musclesFromJson = new Array<Muscle>();
        for(let i in json.exerciseMuscles){
            musclesFromJson.push(new Muscle(json.exerciseMuscles[i].muscle.id, json.exerciseMuscles[i].name, json.exerciseMuscles[i].muscleType))
        }        
        const rec = new Exercise(json.id, json.name, json.difficulty, json.youtubeURL, json.description || "No description", musclesFromJson);
        return rec;
    }
}
/*
JSON FROM API
{
  "id": 2,
  "name": "Bench Press",
  "difficulty": 2,
  "youtubeURL": null,
  "description": null,
  "exerciseMuscles": [
    {
      "exerciseId": 2,
      "muscleId": 6,
      "muscle": {
        "id": 6,
        "name": "Chest",
        "muscleType": 0
      }
    },
    {
      "exerciseId": 2,
      "muscleId": 9,
      "muscle": {
        "id": 9,
        "name": "Shoulders",
        "muscleType": 0
      }
    },
    {
      "exerciseId": 2,
      "muscleId": 14,
      "muscle": {
        "id": 14,
        "name": "Triceps",
        "muscleType": 0
      }
    }
  ]
}
*/
import { Exercise } from './exercise/exercise.model';

export class Muscle{
    constructor(
        public id: number, 
        public name: string, 
        public muscleType: number){
    }
    static fromJSON(json: any): Muscle {
        return new Muscle(json.id, json.name, json.muscleType);
    }
    toJSON(){
        return { 
            exerciseId: 0,
            muscleId: this.id
        }
    }
}
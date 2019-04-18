export class Exercise{
    constructor(
        private _name: string,
        private _difficulty: number,
        private _youtubeURL: string,
        private _description: string
    ){}
    get name(): string {return this._name;}
    get difficulty(): number {return this._difficulty;}
    get youtubeURL(): string {return this._youtubeURL;}
    get description(): string {return this._description;}

    static fromJSON(json: any): Exercise {
        const rec = new Exercise(json.name, json.difficulty, json.youtubeURL, json.description);
        return rec;
    }
}
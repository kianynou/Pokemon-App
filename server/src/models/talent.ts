export class Talent {
    id!: number;
    name!: string;
    description!: string;

    constructor(input: Talent) {
        Object.assign(this, input);
    }
}
export class Capacity {
    id!: number;
    name!: string;
    description!: string;
    power! : number;
    precision! : number;
    type_id!: string;

    constructor(input: Capacity) {
    Object.assign(this, input);
    }
}
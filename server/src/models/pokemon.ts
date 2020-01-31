export class Pokemon {
    id!: number;
    number!: number;
    name!: string;
    image!: string;

    constructor(input: Pokemon) {
    Object.assign(this, input);
    }
}
export class Type {
    id!: number;
    name!: string;
    image!: string;

    constructor(input: Type) {
        Object.assign(this, input);
    }
}
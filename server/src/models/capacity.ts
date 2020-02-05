export class Capacity {
    id! : number;
    name! : string;
    description! : string;
    power! : number;
    accuracy! : number;
    type_id! : number;
    category! : string;
    pp! : number;

    constructor(input: Capacity) {
    Object.assign(this, input);
    }
}
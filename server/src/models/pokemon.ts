export class Pokemon {
    id! : number;
    number! : number;
    name! : string;
    artwork! : string;
    sprite! : string;
    spriteShiny! : string;
    description! : string; 
    talent1! : number;
    talent2! : number;
    talent3! : number;
    type1! : number;
    type2! : number;
    evolution! : number;
    prevolution! : number;
    hp! : number;
    atk! : number;
    def! : number;
    atkspe! : number;
    defspe! : number;
    speed! : number;
    special! : number;

    constructor(input: Pokemon) {
    Object.assign(this, input);
    }
}
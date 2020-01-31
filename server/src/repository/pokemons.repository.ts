import { Pokemon } from './../models/pokemon';
import { MysqlConnection } from './../loaders/mysql';

export class PokemonsRepository {

    private static instance: PokemonsRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'PokemonCheckpoint';

    static getInstance() {
        if (!this.instance) {
            this.instance = new PokemonsRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    findAll(): Promise<Pokemon[]> {
        return this.connection.query(`SELECT * from ${this.table} ORDER BY number ASC`)
            .then((results: any) => {
                return results.map((pokemon: any) => new Pokemon(pokemon));
        });
    }

    findById(id: number): Promise<Pokemon> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
            .then((results: any) => new Pokemon(results[0]));
    }

    insert(pokemon: Pokemon) {
        return this.connection.query(
            `INSERT INTO ${this.table} (number, name, image) VALUES (?,?,?)`,
            [pokemon.number, pokemon.name, pokemon.image]
        ).then((result: any) => {
            // After an insert the insert id is directly passed in the promise
            return this.findById(result.insertId);
        });
    }

    update(pokemon: Pokemon) {
        return this.connection.query(
            `UPDATE ${this.table} SET number = ?, name = ? WHERE id = ?`,
            [pokemon.number, pokemon.name, pokemon.id]
        ).then(() => {
            return this.findById(pokemon.id);
        });
    }

    delete(id: number): Promise<any> {
        return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}
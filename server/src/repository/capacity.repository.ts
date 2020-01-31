import { Capacity } from '../models/capacity';
import { MysqlConnection } from './../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class CapacityRepository {

    private static instance: CapacityRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'Capacity';

    static getInstance() {
        if (!this.instance) {
            this.instance = new CapacityRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all capacities and return it in a promise.
     */
    findAll(): Promise<Capacity[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
            .then((results: any) => {
            return results.map((capacity: any) => new Capacity(capacity));
            });
    }

    /**
     * Make a query to the database to retrieve one capacity by its id in parameter. 
     * Return the capacity found in a promise.
     * @param id capacity id
     */
    findById(id: number): Promise<Capacity> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
            .then((results: any) => new Capacity(results[0]));
    }


    /**
     * Make a query to the database to insert a new capacity and return the created capacity in a promise.
     * @param capacity capacity to create
     */
    insert(capacity: Capacity) {
        return this.connection.query(
            `INSERT INTO ${this.table} (name, description, power, precision, type_id) VALUES (?,?)`,
            [capacity.name, capacity.description, capacity.power, capacity.precision, capacity.type_id]
        ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
            return this.findById(result.insertId);
        });
    }

    /**
     * Make a query to the database to update an existing capacity and return the updated capacity in a promise.
     * @param capacity capacity to update
     */
    update(capacity: Capacity) {
        return this.connection.query(
            `UPDATE ${this.table} SET name = ?, description = ? WHERE id = ?`,
            [capacity.name, capacity.description, capacity.id]
        ).then(() => {
            return this.findById(capacity.id);
        });
    }

    /**
     * Make a query to the database to delete an existing capacity and return an empry promise
     * @param id capacity id to delete
     */
    delete(id: number): Promise<any> {
        return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}

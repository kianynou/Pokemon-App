import { Talent } from './../models/talent';
import { MysqlConnection } from './../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class TalentRepository {

    private static instance: TalentRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'Talent';

    static getInstance() {
        if (!this.instance) {
            this.instance = new TalentRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all talents and return it in a promise.
     */
    findAll(): Promise<Talent[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
            .then((results: any) => {
            return results.map((talent: any) => new Talent(talent));
            });
    }

    /**
     * Make a query to the database to retrieve one talent by its id in parameter. 
     * Return the talent found in a promise.
     * @param id talent id
     */
    findById(id: number): Promise<Talent> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
            .then((results: any) => new Talent(results[0]));
    }


    /**
     * Make a query to the database to insert a new talent and return the created talent in a promise.
     * @param talent talent to create
     */
    insert(talent: Talent) {
        return this.connection.query(
            `INSERT INTO ${this.table} (name, description) VALUES (?,?)`,
            [talent.name, talent.description]
        ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
            return this.findById(result.insertId);
        });
    }

    /**
     * Make a query to the database to update an existing talent and return the updated talent in a promise.
     * @param talent talent to update
     */
    update(talent: Talent) {
        return this.connection.query(
            `UPDATE ${this.table} SET name = ?, description = ? WHERE id = ?`,
            [talent.name, talent.description, talent.id]
        ).then(() => {
            return this.findById(talent.id);
        });
    }

    /**
     * Make a query to the database to delete an existing talent and return an empry promise
     * @param id talent id to delete
     */
    delete(id: number): Promise<any> {
        return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}

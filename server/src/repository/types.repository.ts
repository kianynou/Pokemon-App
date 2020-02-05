import { Type } from './../models/type';
import { MysqlConnection } from './../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class TypesRepository {

    private static instance: TypesRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'Type';

    static getInstance() {
        if (!this.instance) {
            this.instance = new TypesRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all Types and return it in a promise.
     */
    findAll(): Promise<Type[]> {
        return this.connection.query(`SELECT * from ${this.table} ORDER BY name asc`)
            .then((results: any) => {
                return results.map((type: any) => new Type(type));
            });
    }

    /**
     * Make a query to the database to retrieve one type by its id in parameter. 
     * Return the type found in a promise.
     * @param id type id
     */
    findById(id: number): Promise<Type> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
            .then((results: any) => new Type(results[0]));
    }


    /**
     * Make a query to the database to insert a new type and return the created type in a promise.
     * @param type type to create
     */
    insert(type: Type) {
        return this.connection.query(
            `INSERT INTO ${this.table} (name, image) VALUES (?,?)`,
            [type.name, type.image]
        ).then((result: any) => {
            // After an insert the insert id is directly passed in the promise
            return this.findById(result.insertId);
        });
    }

    /**
     * Make a query to the database to update an existing type and return the updated type in a promise.
     * @param type type to update
     */
    update(type: Type) {
        return this.connection.query(
            `UPDATE ${this.table} SET name = ?, image = ? WHERE id = ?`,
            [type.name, type.image, type.id]
        ).then(() => {
            return this.findById(type.id);
        });
    }

    /**
     * Make a query to the database to delete an existing type and return an empry promise
     * @param id type id to delete
     */
    delete(id: number): Promise<any> {
        return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}

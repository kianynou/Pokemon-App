import { TypesRepository } from './../repository/types.repository';
import { Type } from 'src/models/type';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les type doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class TypesService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: TypesService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new TypesService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: TypesRepository;
    private constructor() {
        this.repository = TypesRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of Types.
     */
    getAll(): Promise<Type[]> {
        return this.repository.findAll();
    }

    /**
     * Return a promise which contains the type relative to the id in parameter.
     * @param id type id
     */
    getById(id: number): Promise<Type> {
        return this.repository.findById(id);
    }

    /**
     * Create a new type and return a promise which contains the created type.
     * @param type type to create
     */
    create(type: any): Promise<Type> {
      return this.repository.insert(type);
    }

    /**
     * Update the type in parameter and return a promise which contains the updated type.
     * @param type type to update
     */
    update(type: any): Promise<Type> {
      return this.repository.update(type);
    }

    /**
     * Delete the type related to the id in parameter. Return an empty promise.
     * @param id type id
     */
    delete(id: number): Promise<any> {
      return this.repository.delete(id);
    }
}

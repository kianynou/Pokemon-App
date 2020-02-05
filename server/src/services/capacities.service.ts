import { CapacitiesRepository } from '../repository/capacities.repository';
import { Capacity } from 'src/models/capacity';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class CapacitiesService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: CapacitiesService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new CapacitiesService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: CapacitiesRepository;
    private constructor() {
        this.repository = CapacitiesRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of capacities.
     */
    getAll(): Promise<Capacity[]> {
        return this.repository.findAll();
    }

    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */
    getById(id: number): Promise<Capacity> {
        return this.repository.findById(id);
    }

    /**
     * Create a new capacity and return a promise which contains the created capacity.
     * @param capacity capacity to create
     */
    create(capacity: any): Promise<Capacity> {
        return this.repository.insert(capacity);  
    }

    /**
     * Update the capacity in parameter and return a promise which contains the updated capacity.
     * @param capacity capacity to update
     */
    update(capacity: any): Promise<Capacity> {
        return this.repository.update(capacity);  
    }

    /**
     * Delete the capacity related to the id in parameter. Return an empty promise.
     * @param id capacity id
     */
    delete(id: number): Promise<any> {
        return this.repository.delete(id);  
    }
}

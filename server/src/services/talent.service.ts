import { TalentRepository } from './../repository/talent.repository';
import { Talent } from 'src/models/talent';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class TalentService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: TalentService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new TalentService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: TalentRepository;
    private constructor() {
        this.repository = TalentRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of talents.
     */
    getAll(): Promise<Talent[]> {
        return this.repository.findAll();
    }

    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */
    getById(id: number): Promise<Talent> {
        return this.repository.findById(id);
    }

    /**
     * Create a new talent and return a promise which contains the created talent.
     * @param talent talent to create
     */
    create(talent: any): Promise<Talent> {
        return this.repository.insert(talent);  
    }

    /**
     * Update the talent in parameter and return a promise which contains the updated talent.
     * @param talent talent to update
     */
    update(talent: any): Promise<Talent> {
        return this.repository.update(talent);  
    }

    /**
     * Delete the talent related to the id in parameter. Return an empty promise.
     * @param id talent id
     */
    delete(id: number): Promise<any> {
        return this.repository.delete(id);  
    }
}

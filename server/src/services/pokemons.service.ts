import { PokemonsRepository } from './../repository/pokemons.repository';
import { Pokemon } from 'src/models/pokemon';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les pokemon doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class PokemonsService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: PokemonsService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new PokemonsService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: PokemonsRepository;
    private constructor() {
        this.repository = PokemonsRepository.getInstance();
    }

    // Business logic

    getAll(): Promise<Pokemon[]> {
        return this.repository.findAll();
    }

    getById(id: number): Promise<Pokemon> {
        return this.repository.findById(id);
    }

    create(pokemon: any): Promise<Pokemon> {
        return this.repository.insert(pokemon);
    }

    update(pokemon: any): Promise<Pokemon> {
        return this.repository.update(pokemon);
    }

    delete(id: number): Promise<any> {
        return this.repository.delete(id);
    }
}

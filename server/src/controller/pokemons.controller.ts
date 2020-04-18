import { Pokemon } from './../models/pokemon';
import { PokemonsService } from './../services/pokemons.service';
import express, { Router, Request, Response, Application } from 'express';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const PokemonsController = (app: Application) => {

    const router: Router = express.Router();
    const pokemonsService = PokemonsService.getInstance();

    router.get('/', (req: Request, res: Response) => {
        pokemonsService.getAll().then(results => {
            res.send(results);
        })
        .catch(err => {
            console.log(err);
        })
    });

    router.get('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        pokemonsService.getById(id).then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

    router.post('/', (req: Request, res: Response) => {
      const pokemon: Pokemon = req.body; // Automatically transform in a pokemon object

        pokemonsService.create(pokemon).then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

    router.put('/:id', (req: Request, res: Response) => {
        const pokemon: Pokemon = req.body; // req.params.id is automatically set into the body

        pokemonsService.update(pokemon).then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

    router.delete('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        pokemonsService.delete(id).then(result => {
            res.send();
        })
        .catch(err => {
            console.log(err);
        })
    });

    router.post('/upload-image', async (req, res) =>{
        try {
            if(!req.files) {
                res.send({
                    status: false,
                    message: 'No file uploaded'
                });
            } else {
                let artwork : any = req.files.artwork;
                console.log(artwork);
        
                artwork.mv('./uploads/' + artwork.name)
        
                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: artwork.name,
                        mimetype: artwork.mimetype,
                        size: artwork.size
                    }
                });

                let sprite : any = req.files.sprite;
                console.log(sprite);
        
                sprite.mv('./uploads/' + sprite.name)
        
                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: sprite.name,
                        mimetype: sprite.mimetype,
                        size: sprite.size
                    }
                });

                let spriteshiny : any = req.files.spriteshiny;
                console.log(spriteshiny);
        
                spriteshiny.mv('./uploads/' + spriteshiny.name)

                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: spriteshiny.name,
                        mimetype: spriteshiny.mimetype,
                        size: spriteshiny.size
                    }
                });
            }
            } catch (err) {
                console.log(err)
                res.status(500).send(err);
            }
        });
    app.use('/pokemons', router);
};

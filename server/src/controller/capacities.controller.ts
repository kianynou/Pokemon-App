import { Capacity } from '../models/capacity';
import { CapacitiesService } from '../services/capacities.service';
import express, { Router, Request, Response, Application } from 'express';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const CapacitiesController = (app: Application) => {

    const router: Router = express.Router();
    const capacityService = CapacitiesService.getInstance();

    /**
     * Return all capacities in JSON
     */
    router.get('/', (req: Request, res: Response) => {
        capacityService.getAll().then(results => {
            res.send(results);
        })
        .catch(err => {
            console.log(err);
        })
    });

    /**
     * Return only one capacity in JSON relative to its id
     */
    router.get('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        capacityService.getById(id).then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

    /**
     * Create a new capacity from a JSON body and return the created capacity in JSON.
     */
    router.post('/', (req: Request, res: Response) => {
      const capacity: Capacity = req.body; // Automatically transform in a capacity object

        capacityService.create(capacity).then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

    /**
     * Update a capacity relative to its id and return the updated capacity in JSON.
     */
    router.put('/:id', (req: Request, res: Response) => {
      const capacity: Capacity = req.body; // req.params.id is automatically set into the body

        capacityService.update(capacity).then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

    /**
     * Delete a capacity relative its id.
     */
    router.delete('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        capacityService.delete(id).then(result => {
            res.send();
        })
        .catch(err => {
            console.log(err);
        })
    });

    app.use('/capacities', router);
};

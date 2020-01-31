import { Talent } from './../models/talent';
import { TalentService } from './../services/talent.service';
import express, { Router, Request, Response, Application } from 'express';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const TalentController = (app: Application) => {

    const router: Router = express.Router();
    const talentService = TalentService.getInstance();

    /**
     * Return all talents in JSON
     */
    router.get('/', (req: Request, res: Response) => {
        talentService.getAll().then(results => {
            res.send(results);
        })
        .catch(err => {
            console.log(err);
        })
    });

    /**
     * Return only one Talent in JSON relative to its id
     */
    router.get('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        talentService.getById(id).then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

    /**
     * Create a new talent from a JSON body and return the created talent in JSON.
     */
    router.post('/', (req: Request, res: Response) => {
      const talent: Talent = req.body; // Automatically transform in a Talent object

        talentService.create(talent).then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

    /**
     * Update a talent relative to its id and return the updated talent in JSON.
     */
    router.put('/:id', (req: Request, res: Response) => {
      const talent: Talent = req.body; // req.params.id is automatically set into the body

        talentService.update(talent).then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

    /**
     * Delete a talent relative its id.
     */
    router.delete('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        talentService.delete(id).then(result => {
            res.send();
        })
        .catch(err => {
            console.log(err);
        })
    });

    app.use('/talent', router);
};

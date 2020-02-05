import { Type } from './../models/type';
import { TypesService } from './../services/types.service';
import express, { Router, Request, Response, Application } from 'express';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const TypesController = (app: Application) => {

    const router: Router = express.Router();
    const typesService = TypesService.getInstance();

    router.get('/', (req: Request, res: Response) => {
        typesService.getAll().then(results => {
            res.send(results);
        })
        .catch(err => {
            console.log(err);
        })
    });

    router.get('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        typesService.getById(id).then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

    router.post('/', (req: Request, res: Response) => {
      const type: Type = req.body; // Automatically transform in a type object

        typesService.create(type).then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

    router.put('/:id', (req: Request, res: Response) => {
        const type: Type = req.body; // req.params.id is automatically set into the body

        typesService.update(type).then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

    router.delete('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        typesService.delete(id).then(result => {
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
                let image : any = req.files.image;
                console.log(req.files.image)
                console.log(image);
        
                image.mv('./uploads/' + image.name)
        
                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: image.name,
                        mimetype: image.mimetype,
                        size: image.size
                    }
                });
            }
            } catch (err) {
                console.log(err)
                res.status(500).send(err);
            }
        });
    app.use('/types', router);
};

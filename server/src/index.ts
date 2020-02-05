import express from 'express';
import loaders from './loaders';
import { TeamsController } from './controller/team.controller';
import { PostsController } from './controller/posts.controller';
import { TalentController } from './controller/talent.controller';
import { CapacitiesController } from './controller/capacities.controller';
import { AuthController } from './controller/auth.controller';
import { UsersController } from './controller/users.controller';
import { PokemonsController } from './controller/pokemons.controller';
import { TypesController } from './controller/types.controller';

async function startServer() {
  // Récupération de l'application initiale
  const app = express();

  // Chargement des différent loader
  await loaders(app);

  // Ajout des différentes route de votre application
  PostsController(app);
  TalentController(app);
  TeamsController(app);
  CapacitiesController(app);
  AuthController(app);
  UsersController(app);
  PokemonsController(app);
  TypesController(app);

  // Démarrage du serveur une fois que tout est correctement init
  app.listen(3000, () => console.log('Express server  is running'));
}

startServer();

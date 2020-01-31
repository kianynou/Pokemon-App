import express from 'express';
import loaders from './loaders';
import { TeamsController } from './controller/team.controller';
import { PostsController } from './controller/posts.controller';
import { TalentController } from './controller/talent.controller';
import { CapacityController } from './controller/capacity.controller';
import { AuthController } from './controller/auth.controller';
import { UsersController } from './controller/users.controller';
import { PokemonsController } from './controller/pokemons.controller';

async function startServer() {
  // Récupération de l'application initiale
  const app = express();

  // Chargement des différent loader
  await loaders(app);

  // Ajout des différentes route de votre application
  PostsController(app);
  TalentController(app);
  TeamsController(app);
  CapacityController(app);
  AuthController(app);
  UsersController(app);
  PokemonsController(app);

  // Démarrage du serveur une fois que tout est correctement init
  app.listen(3000, () => console.log('Express server  is running'));
}

startServer();

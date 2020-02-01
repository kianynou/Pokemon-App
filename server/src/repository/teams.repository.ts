import { MysqlConnection } from './../loaders/mysql';
import { Team } from '../models/team';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class TeamsRepository {

  private static instance: TeamsRepository;
  private connection: MysqlConnection = MysqlConnection.getInstance();

  private table: string = 'Team';

  static getInstance() {
      if (!this.instance) {
          this.instance = new TeamsRepository();
      }
      return this.instance;
  }

  private constructor() {
  }

  /**
   * Make a query to the database to retrieve all posts and return it in a promise.
   */
  findAll(): Promise<Team[]> {
    return this.connection.query(
      `SELECT
        u.username,
        t.name,
        p1.name as pokemon1, 
        p2.name as pokemon2,
        p3.name as pokemon3, 
        p4.name as pokemon4, 
        p5.name as pokemon5,
        p6.name as pokemon6
      FROM ${this.table} as t
        RIGHT JOIN PokemonCheckpoint as p1 ON p1.id = t.pokemon1
        RIGHT JOIN PokemonCheckpoint as p2 ON p2.id = t.pokemon2
        RIGHT JOIN PokemonCheckpoint as p3 ON p3.id = t.pokemon3
        RIGHT JOIN PokemonCheckpoint as p4 ON p4.id = t.pokemon4
        RIGHT JOIN PokemonCheckpoint as p5 ON p5.id = t.pokemon5
        RIGHT JOIN PokemonCheckpoint as p6 ON p6.id = t.pokemon6
        JOIN User as u ON u.id = t.user_id
        `)
      .then((results: any) => {
        return results.map((team: any) => new Team(team));
      });
  }

  findTeamByUser(id: number): Promise<Team[]> {
    return this.connection.query(
      `SELECT 
        t.id,
        t.user_id, 
        t.name, 
        p1.name as pokemon1, 
        p2.name as pokemon2,
        p3.name as pokemon3, 
        p4.name as pokemon4, 
        p5.name as pokemon5,
        p6.name as pokemon6
      FROM ${this.table} as t 
        RIGHT JOIN PokemonCheckpoint as p1 ON p1.id = t.pokemon1
        RIGHT JOIN PokemonCheckpoint as p2 ON p2.id = t.pokemon2
        RIGHT JOIN PokemonCheckpoint as p3 ON p3.id = t.pokemon3
        RIGHT JOIN PokemonCheckpoint as p4 ON p4.id = t.pokemon4
        RIGHT JOIN PokemonCheckpoint as p5 ON p5.id = t.pokemon5
        RIGHT JOIN PokemonCheckpoint as p6 ON p6.id = t.pokemon6
      WHERE t.user_id = ?`, [id])
      .then((results: any) => {
        return results.map((team: any) => new Team(team));
      }
    );
  }

  /**
   * Make a query to the database to retrieve one post by its id in parameter. 
   * Return the post found in a promise.
   * @param id post id
   */
  findById(id: number): Promise<Team> {
    return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
      .then((results: any) => new Team(results[0]));
  }

  searchTeam(name: string, loc: string): Promise<Team> {
    return this.connection.query(`SELECT count(user_team.user_id) as nbPlayers, team.nbPlayerMAx - COUNT(user_team.user_id) AS nbPlayersRest, team.name, team.logo, team.details, team.nbPlayerMax, team.city, team.zip_code, team.country FROM user_team RIGHT JOIN team ON team.id=user_team.team_id WHERE team.city = ? OR team.country = ? OR team.zip_code = ? OR team.name = ? GROUP BY team.id`, [loc, loc, loc, name])
    .then((results: any) => {
      return results;
    });
  }

  /**
   * Make a query to the database to insert a new post and return the created post in a promise.
   * @param post post to create
   */
  insert(team: Team) {
    return this.connection.query(
      `INSERT INTO ${this.table} (name, user_id, pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6) VALUES (?,?,?,?,?,?,?,?)`,
      [team.name, team.user_id, team.pokemon1, team.pokemon2, team.pokemon3, team.pokemon4, team.pokemon5, team.pokemon6]
    ).then((result: any) => {
      // After an insert the insert id is directly passed in the promise
      return this.findById(result.insertId);
    });
  }

  /**
   * Make a query to the database to update an existing post and return the updated post in a promise.
   * @param post post to update
   */
  update(team: Team) {
    return this.connection.query(
      `UPDATE ${this.table} SET name = ?, pokemon1 = ?, pokemon2 = ?, pokemon3 = ?, pokemon4 = ?, pokemon5 = ?, pokemon6 = ? WHERE id = ?`,
      [team.name, team.pokemon1, team.pokemon2, team.pokemon3, team.pokemon4, team.pokemon5, team.pokemon6]
    ).then(() => {
      return this.findById(team.id);
    });
  }

  /**
   * Make a query to the database to delete an existing post and return an empry promise
   * @param id post id to delete
   */
  delete(id: number): Promise<any> {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }

  deleteByAdmin(name: string): Promise<any> {
    return this.connection.query(`DELETE FROM ${this.table} WHERE name = ?`, [name]);
  }
}

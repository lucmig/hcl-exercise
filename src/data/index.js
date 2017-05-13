import db from './db';

export default new class Data {
  constructor() {
    db.version(1).stores({
      game: '++id'});
  }

  async addGame(secret) {
    const key = await db.game.add({ secret, guesses: [] });
    return key;
  }

  async updateGame(id, changes) {
    await db.game.update(id, changes);
  }

  async listGames() {
    const games = await db.game.toArray();
    return games;
  }
}();

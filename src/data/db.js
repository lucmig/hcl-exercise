import Dexie from 'dexie';

export default new class Db {
  constructor() {
    const db = new Dexie('hcl-exercise');
    this.db = db;
  }
}().db;


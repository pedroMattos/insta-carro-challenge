import Dexie from 'dexie';

export const DexieDb = new Dexie('myHeroes');
DexieDb.version(1).stores({
  FavoriteHeroes: 'id, hero',
});


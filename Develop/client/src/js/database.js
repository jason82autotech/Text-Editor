import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  // Add your implementation logic here
  console.log('putDb implementation');
};

export const getDb = async () => {
  // Add your implementation logic here
  console.log('getDb implementation');
};

initdb();

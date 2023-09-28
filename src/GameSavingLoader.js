import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((res) => json(res))
      .then((res) => JSON.parse(res))
      .catch((err) => new Promise((resolve, reject) => {
        reject(err);
      }));
  }
}

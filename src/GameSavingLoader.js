import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    return JSON.parse(await json(await read()));
  }
}

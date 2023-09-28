import GameSavingLoader from './GameSavingLoader';

export default GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.error(error);
});

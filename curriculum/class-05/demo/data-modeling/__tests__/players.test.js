const Players = require('../models/players-model.js');
const players = new Players();

const supergoose = require('./supergoose.js');

describe('Players Model', () => {
  it('can create(() a new player', () => {
    let obj = { name: 'John', bats: 'R', throws: 'R', position: 'C', team: 'Bunnies' };
    return players.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a player', () => {
    let obj = { name: 'John', bats: 'R', throws: 'R', position: 'C', team: 'Bunnies' };
    return players.create(obj)
      .then(record => {
        return players.get(record._id)
          .then(player => {
            Object.keys(obj).forEach(key => {
              expect(player[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

});
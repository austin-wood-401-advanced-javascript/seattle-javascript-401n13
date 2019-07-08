'use strict';

const People = require(`../models/people-model.js`);
const people = new People();

describe('People Model', () => {
  it('can post() a new player', () => {
    let obj = {name:'John'};
    return people.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a player', () => {
    let obj = {name:'John'};
    return people.post(obj)
      .then(record => {
        return people.get(record.id)
          .then(player => {
            Object.keys(obj).forEach(key =>{
              expect(player[key]).toEqual(obj[key]);
            });
          });
      });
  });

});

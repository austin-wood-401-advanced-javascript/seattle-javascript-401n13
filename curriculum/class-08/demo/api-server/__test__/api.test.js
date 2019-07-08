'use strict';

const {server} = require('../lib/server.js');
const supergoose = require('./supergoose.js');
const mockRequest = supergoose(server);

describe('People API', () => {
  it('can post() a new player', () => {
    let obj = {name:'John'};
    return mockRequest.post('/api/v1/people')
      .send(obj)
      .then(data => {
        let record = data.body;
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a player', () => {
    let obj = {name:'John'};
    return mockRequest.post('/api/v1/people')
      .send(obj)
      .then(data => {
        return mockRequest.get(`/api/v1/people/${data.body.id}`)
          .then(record => {
            Object.keys(obj).forEach(key =>{
              expect(record.body[key]).toEqual(obj[key]);
            });
          });
      });
  });

});

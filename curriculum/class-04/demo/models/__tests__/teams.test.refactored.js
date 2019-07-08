const MonolithicTeams = require('../teams/teams.monolithic.js');
const ModularTeams = require('../teams/teams.modular.js');


describe('Teams Model', () => {

  let teams;
  let Implementation;

  let implementations = {
    'Modular, In-Memory': ModularTeams,
    'Monolithic, In-Memory': MonolithicTeams,
  };

  beforeEach(() => {
    teams = new implementations[Implementation]();
  })

  for (Implementation in implementations) {

    // How might we repeat this to check on types?
    it(`${Implementation} sanitize() returns undefined with missing requirements`, () => {
      const schema = teams.schema;
      var testRecord = {};
      for (var field in schema) {
        if (schema[field].required) {
          testRecord[field] = null;
        }
      }
      expect(teams.sanitize(testRecord)).toBeUndefined();
    });

    it(`${Implementation} can post() a new team`, () => {
      let obj = { name: 'Test Team' };
      return teams.create(obj)
        .then(record => {
          Object.keys(obj).forEach(key => {
            expect(record[key]).toEqual(obj[key]);
          });
        })
        .catch(e => console.error('ERR', e));
    });

    it(`${Implementation} can get() a team`, () => {
      let obj = { name: 'Test Team' };
      return teams.create(obj)
        .then(record => {
          return teams.get(record._id)
            .then(team => {
              Object.keys(obj).forEach(key => {
                expect(team[0][key]).toEqual(obj[key]);
              });
            });
        });
    });
  }

});
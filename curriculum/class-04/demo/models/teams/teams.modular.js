'use strict';

const DataModel = require('../memory.js');

class Team extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true },
      name: { required: true },
    };
  }
}

module.exports = Team;
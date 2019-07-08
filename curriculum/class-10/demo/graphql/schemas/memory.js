
'use strict';
const express = require('express');
const { buildSchema } = require('graphql');
const expressGraphQL = require('express-graphql');

const router = express.Router();

// -----------------------------
// Query that uses a simple in-memory store and a custom resolver
// -----------------------------

/*

{
  person(id:2) {
    id,
    firstName,
    role
  }
}

{
  people {
    id,
    firstName,
    role
  }
}


{
  people(lastName: "Smith") {
    id,
    firstName,
    role
  }
}
 */

const people = [
  { id: 1, firstName: 'Jim', lastName: 'Smith', role: 'Parent' },
  { id: 2, firstName: 'Sally', lastName: 'Smith', role: 'Parent' },
  { id: 3, firstName: 'Allison', lastName: 'Smith', role: 'Child' },
  { id: 4, firstName: 'Timmy', lastName: 'Smith', role: 'Child' },
  { id: 5, firstName: 'Freckles', lastName: 'Smith', role: 'Pet' },
];

// GraphQL schema

const inMemorySchema = buildSchema(`
    type Query {
        person(id: Int!): Person
        people(lastName: String, role:String): [Person]
    },
    type Person {
        id: Int
        firstName: String
        lastName: String
        role: String
    }
`);

const getPerson = function(args) {
  let id = args.id;
  return people.filter(person => {
    return person.id == id;
  })[0];
};

const getPeople = function(args) {
  if (Object.keys(args).length) {
    return people.filter(person => {
      return (args.lastName ? args.lastName === person.lastName : true) &&
        (args.role ? args.role === person.role : true)
    });
  } else {
    return people;
  }
};

const inMemoryRoot = {
  person: getPerson,
  people: getPeople,
};

const graph = expressGraphQL({
  schema: inMemorySchema,
  rootValue: inMemoryRoot,
  graphiql: true,
});

router.use('/graphql', graph);

module.exports = router;

'use strict';

const express = require('express');
const { buildSchema } = require('graphql');
const expressGraphQL = require('express-graphql');

const router = express.Router();

// -----------------------------
// Simple Query ... just reguritating a rote piece of data
// -----------------------------

const simpleSchema = buildSchema(`
    type Query {
        message: String
    }
`);
const simpleRoot = {
  message: () => 'Hello World!',
};

const graph = expressGraphQL({
  schema: simpleSchema,
  rootValue: simpleRoot,
  graphiql: true,
});

router.use('/graphql', graph);

module.exports = router;

'use strict';

const express = require('express');
const graphql = require('graphql');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');

const router = express.Router();

mongoose.connect('mongodb://localhost:27017/class10', { useNewUrlParser: true });

const peopleSchema = mongoose.Schema({
  firstName: { type:String, required:true },
  lastName: { type:String, required:true },
  role: { type:String, required:true },
});
const People = mongoose.model('people', peopleSchema);

const {
  GraphQLObjectType, GraphQLString,
  GraphQLID, GraphQLInt,GraphQLSchema,
  GraphQLList,GraphQLNonNull,GraphQLBoolean,
} = graphql;

const PeopleType = new GraphQLObjectType({
  name: 'People',
  fields: () => ({
    id: { type: GraphQLID  },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    role: { type: GraphQLString }
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    person: {
      type: PeopleType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return People.findById(args.id);
      },
    },
    people:{
      type: new GraphQLList(PeopleType),
      args: {
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        role: { type: GraphQLString },
      },
      resolve(parent, args) {
        return People.find(args);
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPeople: {
      type: PeopleType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        role: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let person = new People({
          firstName: args.firstName,
          lastName: args.lastName,
          role: args.role
        });
        return person.save();
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation:Mutation,
});

const graph = expressGraphQL({
  schema: schema,
  graphiql: true,
});

router.use('/graphql', graph);

module.exports = router;

/*

Examples ...

{
	person (id:"5d183a0960ef482f24e18860") {
    id,
    firstName,
    lastName,
    role
  }
}

{
	people {
    id
    firstName
    lastName
    role
  }
}

{
  people(role:"parent") {
    id
    firstName
    lastName
    role
  }
}

mutation {
  addPeople(firstName: "Rosie", lastName: "Cokos", role: "Pet") {
    id
    firstName
    lastName
    role
  }
}


 */

# Demos: Express Routing & Connected API

### Express Routing and Middleware -- `demo/routing`
* Build out a base express server, highlighting it's basic parts as you go
* Build 404, 500 middleware and put them into a middleware folder (talk briefly about modularization)
* Build in a logger just to show how to do it inline.
* Add in a few get routes (`/my/stuff` and `/your/stuff`)
* Once it's all wired up, bring up the topic of modularization
  * Paint a picture of a server with 100+ routes
  * Routes often go together
  * Often, routes match models or behaviors
* `express.Router()'
  * Move those 2 routes into separate files
    * Implement express.router() and export them.
  * Import them back into the server
  * For one of them, leave the full get route in the route (`/my/stuff`)
  * For the other, `use` it with a prefix: `app.use('/your', yourStuffRouter)` and then in the route, only declare `/stuff` to prove that you can wire it that way as well.
  
### Assemble an API server -- `demo/api-server`
* For the 2nd demo, build out a simple API server that marries routing with models
* Build this with 2 route modules (players and teams, for example)
* Build 2 simple data models (memory based CRUD is fine)
* Point the routes at these simple data models to do CRUD via REST
  * Only do get and post in class. 
  * For lab, they'll do all the CRUD ops in their own models.
* Focus the demo on the modularity of the server, not how to build out those pieces again
* Re-Iterate how express middleware works, and the roles that each file plays.
* Discuss strategies for breaking up the modules and the route handlers


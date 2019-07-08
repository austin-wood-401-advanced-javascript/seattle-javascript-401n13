# Demos: Data Modeling With NoSQL Databases

### Mongo Models  (`demo/models.js`)
* Begin by building out the schema (`players-schema.js`), highlighting the rules, types, etc as you go.
* Do not yet build in the hooks
* We'll build out an interface with TDD
* Spend a lot of time wiring up the tests and explaining the process (it's only their 3rd day seeing any tests at all), mocking, etc.
* What is supergoose?
  * It's a mock version of mongo, so that tests don't litter up our database.  For all intents and purposes, it **is** mongo.
  * Code review it, and then let them have it as part of their personal library for all projects
* Using TDD ...
  * Build out the Model, which is a class that contains methods wrapping the common "CRUD" verbs
  * In each of these, you'll call the appropriate mongoose ORM method to do the action
    * Yes, you are ORM'ing an ORM ...
    * Rather, we're creating an "Interface" to it.
  * For the demo, just do `create()` and `get()`

Once you finish the tests, call out the fact that while we're reasonably sure that it works, do we really know? What we've done so far is to do unit testing with a mock. We need to wire this up and really see it ...

* Build out the index.js file which connects to the real mongo and then uses that class to create records.
* Talk through the connection string/url
  * This could/should be in .env
* As you do things, check your database client to show the actual records.
  * Yeah!  Your tests prove that the real thing works...
  * Note that the demo has an ID in it that won't work, pull your own from your DB after you've created some records.
* Once you have cemented the basics of create and read, introduce `pre` and `post` hooks to demonstrate how you can log things, change the data before you save it, or alter it for view after you've retrieved it.
  * This will open a lot of questions from the group.

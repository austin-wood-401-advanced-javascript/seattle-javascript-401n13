# Lab: GraphQL

Add GraphQL Support to a REST API

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

**Visualize the Application**

Evaluate the lab requirements and begin with drawing a **UML** and/or **Data/Process Flow diagram**.  Having a solid visual understanding of the code you have/need and how it connects is critical to properly approaching this assignment.

**Break Down the Assignment**
Once you have a good visual and mental model of how the application works, break down the requirements. For each requirement, ask your self the following questions:

* Where should this new code live in the codebase?
* What existing code needs to be modified?
* What dependencies will I need to install?

**Map your priorities and dependencies before jumping into the code.**

---

## Getting Started

Refer to the Joins and Virtual Columns examples and explanation from the [mongo cheatsheet](../../../reference/mongo-cheatsheet.md) as a refresher on connecting 2 documents. This will help you connect books and bookshelves

## Requirements

In the `starter-code` folder, you've been provided a working API server with a single model, `todo`

* Create a new `/graphql` endpoint using the `graphql` and `express-graphql` modules
* Create a query to resolve a single item by ID
* Create a query to resolve all items, searching on any valid field
* Create a mutator to allow a user to create an item.

### Tests
* Write a full suite of end to end tests, using supergoose, to test client queries and mutations.

### Stretch Goals
* Add an update mutation
* Add a delete mutation

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations


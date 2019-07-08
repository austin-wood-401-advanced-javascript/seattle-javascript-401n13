# LAB: Data Modeling

## Before you begin
* Create a new git repository for this lab
* Copy the starter-code contents into it
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Getting Started
Refer to *Getting Started* in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup instructions

---

## Requirements

### Finish the tests
* Using TDD ...
  * Add tests to support the other CRUD Methods
    * `delete()`
    * `update()`
  * Extend the `memory.js` parent class' `sanitize()` method to support type checking (string, number, boolean), valid values as well as required
    * *How will this change your schemas?*
    * *How will you test this method directly without running a CRUD method?*
  * Genericize the model test to run the same set of core tests on any model

### Create another model
* Using TDD ...
  * Create a data model called **products**
  * Add the following fields - use your own judgement on field type and validation rules
    * category_id
    * price
    * weight
    * quantity_in_stock
* TDD?
  * Shouldn't your generic model test "just work" once you add the Products model to it's list?
    * Yep ...

### Persist the data!
Thus far, you've created a simple, testable, extensible data modeling system.  But the data goes away after each run of the program. For this task, you'll be writing a persistence layer.

* Create a new model type in the `models` folder called `file.js`
  * *Hint: It's not a bad idea to copy the memory model to get started*
* Create a new data model called `person` that uses the file model type (just like categories and products used the memory type)
* Rather than use an in-memory database, which is the array of records, store that data in the file system.
  * Create a `data` folder
  * When working with a model, store it's data in a file with the model name (i.e. `categories.db`)
  * All operations should read from and write to that data file using the node `fs` module
* Write a full test suite
  * Yes ... you can use your memory model tests for inspiration

**Questions**
* How does this change your tests?
  * Do records just keep getting created over and over as you go?
  * How can you mitigate that?
  * Can mocking help?
* Do you want a new test runner for this type of model?


### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations

# Online Computer Database: CRUD Test Cases

This readme is split into the following sections:

1. Automation Tests using Cypress
2. Manual Exploratory Tests 

***PLEASE NOTE:*** In an ideal world we would also cover our requirements with Domain level tests (at the server level).

***ASSUMPTIONS:*** There are no requirements, therefore only basic CRUD testing has been performed.

## Project Set up and Install

1. You must have `node` and `npm` (which comes bundled with `node`) installed on your machine, any version above `8.9.0` will be fine.
2. Clone this project, navigate into the root directory (`qatestexercise`) and run `npm install` to download the dependencies.
3. Open with your favorite JavaScript IDE (I recommend VSCode or IntelliJ Pro as we'll need the AsciiDoc extension later).

***NOTE:*** Take a look at the `package.json` file. You'll notice that there is only one dependency. This makes `Cypress` very stable and easy to maintain.

## Cypress Tests

One way you can run the Cypress tests is by using the Test Runner. 

In a terminal navigate to the project root directory and run the following command:

`npm run cypress:open`

The Cypress Test Runner will open and look like this:

![alt text](./images/cypress_runner.png "Logo Title Text 1")

Click on the `Run all specs` button.

This will run the `create`, `delete`, `read` and `update` tests (or `specs`). The code I wrote for these test can be found in the `cypress > integration > computers` folder in the project.

These can be run in any order or run individually - I've written them so they don't depend on each other. E.g. the `delete` test will create a computer as a pre-req before deleting it.

Cypress runs a lot faster than Selenium, because it runs natively in the browser. On my laptop these 4 UI tests run in 9 seconds. This means that 400 user journey tests like these would take 15 minutes, which isn't bad. 

Take a look at the code in the test specs in the `cypress > integration > computers` folder. There are comments describing what they do - I ran out of time, so the comments aren't the best unfortunatly.

Now click on the `create` test in the Cypress Runner.

![alt text](./images/cypress_runner_create.png "Logo Title Text 1")

Drag the `Chrome` window that opens to a different screen if you have two screens. On the left, you'll see all the test steps. 

![alt text](./images/test_steps.png "Logo Title Text 1")

Click on one of the steps and you'll see chrome step back in time to the point in the test you've clicked on. Cypress also highlights each page action (e.g. a click) on the page with a red cross, so you know which element you're interacting with at that point in the test.

Now click on the `empty.spec.js` test in the runner.

![alt text](./images/empty_test.png "Logo Title Text 1")

`Chrome` will change to the empty test.

Now return to your IDE, while leaving everything else open. Copy the code from `Step 1` in the `create.spec.js` test into the `empty.spec.js` test, while keeping an eye on the open `Chrome` browser.

![alt text](./images/copy_step.png "Logo Title Text 1")

You'll see that the test updates in real time and runs in the browser.

Add more Steps and see these run in the browser also.

As you write your test, it runs in the browser in real time. As you type, you can see if you made any errors or mistakes, or even if the test will pass or fail at any point.

As an automation tester, this makes your job much easier - you don't have to keep running your tests to see if you've made any mistakes in the code.

## Why Cypress?

Cypress is one of a new breed of Test Automation tools that are helping the industry break free from the stranglehold of `selenium` and selenium-based tools such as `WebDriverIO` and `Protractor`. The tests run in the browser, so you don't need `drivers` or `selenium servers` connecting by the `wire` protocol. They're much faster, much more powerful and incredibly robust and reliable.

The code can also be easily incorporated into your application project structure and handles many application frameworks such as `React`, `Angular` or `Vue` with ease.

Cypress also allows you to stub out your server, send `before` pre-reqs as HTTP requests and lots lots more. It's also a useful tool for devs to use while developing the product. I also love the error messages, which are helpful and informative, unlike most tools. 

The JavaScript `await / async` promise handlers are all hidden away under the hood, which some people like, while others don't. It goes without saying that as it runs natively in the browser, you don't need 'implicit or explicit waits' for elements like you do in Selenium.

[BDD Feature Files with Gherkin Syntax](https://www.npmjs.com/package/cypress-cucumber-preprocessor) is also possible with Cypress, but I didn't have time to set it up in this project. 

The main disadvantage of Cypress is that it currently only supports the Chrome browser, but a wider browser support is planned for the end of the year.

[TestCafe](https://github.com/DevExpress/testcafe) is another (non-selenium based) automation test tool which is gathering a lot of praise. It does support cross-browser testing, exposes the 'async/await' syntax for handling promises and can be used with `Grunt` and `Gulp` if you need to inject the database with test data before running your tests. Cypress can only do this by running `batch` or `shell` scripts on your computer.


## Exploratory (Manual) Tests

***NOTE:*** Please install the latest `AsciiDoc` extension (by João Pinto) in VSCode in order to view the formatted version of these files.

The exploratory tests can be found in `docs > exploratory_tests > computer_crud > create_computer_record.adoc`. In order to view the formatted version, press `ctrl+shift+v` and the document will be generated.

This file contains the `record` of the exploratory testing that has taken place. I've put a table and some short explanations in the document as an example. I've only created a record for `creating` a computer, but there will also be records for exploratory testing around `deleting`, `updating` and `reading` a computer and any other user journeys.

In the `docs > exploratory_tests > guides` folder, I've also included a `tools&techniques.adoc` file to help exploratory testers doing their job, and made some notes in there as an example. This is a living document, and will therefore grow as more knowledge is shared/added (e.g. with more information around negative and boundary testing than I've had time to put in there).

### Why AsciiDoc?

I've used AsciiDoc as it ensures that the records and guides are under code control and maintained in the project. It can also be easily exported into `PDF`, `HTML` or many other formats for review or reporting. It's also more powerful that Markdown. However Markdown is an acceptable alternative, especially as it renders in `github`.

Creating documents like these as `living documentation` ensures that no-one is afraid to make changes or improvements as the project develops, which alloows the team to innovate and quickly adapt to challenges.
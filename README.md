# CRUD TEST CASES: Online Database

This readme is split into the following sections:

1. Automation Tests using Cypress
2. Automation Tests using WebDriverIO
3. Manual Exploratory Tests 

The automated tests will then become part of the regression pack. Some of the exploratory tests may give rise to additional automated tests.

*PLEASE NOTE:* In an ideal world we would also cover our requirements with Domain level tests (at the server level).

*ASSUMPTIONS:* There are no requirements, therefore only basic CRUD testing has been performed.

In order to view and run these examples, it is recommended that you use VSCode with the following extensions:

ADD EXTENSIONS HERE

Just to make your life easier (e.g for viewing the ASCIIDOCs), however you can use whatever JavaScript IDE you wish.

## Cypress Tests

### Create Computer

### Read Computer

### Update Computer

### Delete Computer

### Edge case: No computers


## WebDriver.IO

To compare the speed of Cypress 


*PLEASE NOTE* 

Cypress is not the only new 'no-selenium' test tool out there. It's also worth looking into `TestCafe`.

## Exploratory Tests

The exploratory tests are written in ASCIIDOC and version controlled alongside the automated tests. The files asciidoc files end in `.adoc` and can be individually viewed and exported. To view or export all the CRUD exploratory tests in one document, click on the `crud_tests.adoc` file in the `docs > exploratory_tests` folder.

To view an ASCIIDOC file in a readable format, click on the file and press XXXXX in VSCode with the ASCIIDOC extension installed. To export them into HTML, PDF or many other formats, asciidoctor must be installed on your local computer.

While running the exploratory tests, it is expected that the tester will make a detailed note of all the steps they take (e.g. in a spreadsheet). If they encounter any errors, then these 'steps to reproduce' will be replicated into a JIRA issue and passed on to the dev team. 

The exploratory tests and the JIRA issues will act as a record of the exploratory testing having been completed.

The requirements are tested by the automated tests along with the appropriate reporting.
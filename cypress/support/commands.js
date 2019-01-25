// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


// Cypress will send HTTP requests to check to see if the computer is present. If not, create it.
Cypress.Commands.add("createComputer", (computer) => {
    // Filter on the computer name
    cy.request('http://computer-database.herokuapp.com/computers?f=' + computer.name)
    .then((response) => {
        // If the response is empty
        if (response.body.includes('Nothing to display')) {
            // Send a POST request to create the computer
            cy.request({
                method: 'POST',
                url: '/computers', // baseUrl is prepended to url
                form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
                body: {
                  name: computer.name,
                  introduced: computer.introduced_date,
                  discontinued: computer.discontinued_date,
                  company: 2
                }
              })
              // Check that this was accepted by the server (200 ok)
              .should((response) => {
                expect(response.status).to.eq(200)
            })
            
        }
    })
})

// Create a Cypress command to filter on any computer
Cypress.Commands.add("filterOnComputer", (computer) => {

    cy.get('#searchbox').type(computer.name);
    cy.get('#searchsubmit').click();

})
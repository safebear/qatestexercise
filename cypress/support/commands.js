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


// Check to see if the computer is present. If not, create it.
// This is all done with HTTP requests as we're not testing
// our pre-reqs
Cypress.Commands.add("createComputer", (computer) => {
    cy.request('http://computer-database.herokuapp.com/computers?f=' + computer.name)
    .then((response) => {
        if (response.body.includes('Nothing to display')) {
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
              .should((response) => {
                expect(response.status).to.eq(200)
            })
            
        }
    })
})
context('play: create computer', () => {

    // The base url is set in the 'cypress.json' file. We just need the 'computers' page.
    beforeEach(() => {
        cy.visit('/computers')
      })

    // Here's our test  
    it('adds a new computer', () => {

        // Get our 'computer.json' test data from the 'fixtures' folder
        cy.fixture('computerA').then((computer) => {
            
            // Start adding your test steps here!

        })
        
    })
})
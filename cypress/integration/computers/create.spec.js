context('create computer', () => {

    // The base url is set in the 'cypress.json' file. We just need the 'computers' page.
    beforeEach(() => {
        cy.visit('/computers')
      })

    // Here's our test  
    it('adds a new computer', () => {

        // Get our 'computer.json' test data from the 'fixtures' folder
        cy.fixture('computerA').then((computer) => {
            
            // Click on the 'Add a new computer' button
            cy.get('#add').click();

            // and check we're now on the 'add computer page'
            cy.url().should('include', '/new');
        
            // fill out the form with the test data
            cy.get('#name').type(computer.name);
            cy.get('#introduced').type(computer.introduced_date);
            cy.get('#discontinued').type(computer.discontinued_date);
            cy.get('#company').select(computer.company);

            // Click on 'create this computer' button
            cy.get('[value="Create this computer"]').click();

            // Check that it's been added
            cy.get('.alert-message.warning').should('contain', computer.name);
        
            // Simples

        })
        
    })

})
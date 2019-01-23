context('update computer', () => {
    beforeEach(() => {

        // navigate to the website
        cy.visit('/computers');

        // Check that the computer is present, if not, create it
        cy.fixture('computerA').then((computer) => {
            cy.createComputer(computer);
        })
        // Look in the 'commands.js' file in the 'cypress > support' folder for the
        // code I wrote for this.

      })

      it('update a computers details', () => {

        cy.fixture('computerA').then((computer) => {
            // Filter on the computer name 
            cy.get('#searchbox').type(computer.name);
            cy.get('#searchsubmit').click();

            // Click on the computer
            cy.contains(computer.name).click();
            
            // Change the values to computerB (see the 'fixtures' folder for test data)
            // Need to 'clear' the values first (except for the select box)
            cy.fixture('computerB').then((computerb) => {
                cy.get('#name').clear().type(computerb.name);
                cy.get('#introduced').clear().type(computerb.introduced_date);
                cy.get('#discontinued').clear().type(computerb.discontinued_date);
                cy.get('#company').select(computerb.company);

                // Click on 'Save this computer'
                cy.get('[value="Save this computer"]').click();
                
                // Check that it's been updated
                cy.get('.alert-message.warning').should('contain', computerb.name);

            })
        })    
      })


    
      
})
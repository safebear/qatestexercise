context('read computer', () => {

    beforeEach(() => {

        // navigate to the website
        cy.visit('/computers');

        // Check that the computer is present, if not, create it
        cy.fixture('computerA').then((computer) => {
            cy.createComputer(computer);
        })
        // Look in the 'commands.js' file in the 'support' folder for the
        // code I wrote for this.

      })

      it('reads the computer content', () => {

        cy.fixture('computerA').then((computer) => {
            // Filter on the computer name 
            cy.get('#searchbox').type(computer.name);
            cy.get('#searchsubmit').click();

            // Click on the computer
            cy.contains(computer.name).click();
            
            // Check the values match the test data
            cy.get('#name').should('have.value', computer.name);
            cy.get('#introduced').should('have.value', computer.introduced_date);
            cy.get('#discontinued').should('have.value', computer.discontinued_date);
            cy.get('#company').should('have.value', computer.company_value);

        })    
      })


      
})
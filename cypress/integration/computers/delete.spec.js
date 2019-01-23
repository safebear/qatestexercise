context('delete computer', () => {

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

      it('delete a computer', () => {

        cy.fixture('computerA').then((computer) => {
            // Filter on the computer name 
            cy.get('#searchbox').type(computer.name);
            cy.get('#searchsubmit').click();

            // Click on the computer
            cy.contains(computer.name).click();

            // Press the delete button
            cy.get('[value="Delete this computer"]').click( {force:true} ); 
            // Need the force:true above because Cypress fails the test because 
            // the button can be covered by the black header if you scroll down on this page

             // Filter on the computer name again
             // cy.get('#searchbox').type(computer.name); // alternate way
             // cy.get('#searchsubmit').click(); // alternate way

             // Check that the computer is no longer present
             // cy.get('em').should('contain', 'Nothing to display'); // alternate way
             cy.get('.alert-message.warning').should('contain', 'Computer has been deleted');

        })

      })



})
context('crud computers', () => {

    // The base url is set in the 'cypress.json' file in the root directory of the project. 
    // We just need to state here that we want the 'computers' page.
    beforeEach(() => {
        cy.visit('/computers')

        // Check that the computer is present, if not, create it
        cy.fixture('computerA').then((computer) => {
            cy.createComputer(computer);
        })

      })

     
    it('creats a new computer', () => {

        // Get our 'computer.json' test data from the 'cypress > fixtures' folder
        cy.fixture('computerA').then((computer) => {
            
            // Step 1: Click on the 'Add a new computer' button
            cy.get('#add').click();

            // and check we're now on the 'add computer page'
            cy.url().should('include', '/new');
        
            // Step 2: fill out the form with the test data
            cy.get('#name').type(computer.name);
            cy.get('#introduced').type(computer.introduced_date);
            cy.get('#discontinued').type(computer.discontinued_date);
            cy.get('#company').select(computer.company);

            // Step 3: Click on 'create this computer' button
            cy.get('[value="Create this computer"]').click();

            // Step 4: Check that it's been added
            cy.get('.alert-message.warning').should('contain', computer.name);
        

        })
        
    })

    it('read a computers details', () => {

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
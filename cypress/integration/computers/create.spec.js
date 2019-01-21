context('Create', () => {
    beforeEach(() => {
        // Navigate to the URL
        cy.visit('http://computer-database.herokuapp.com/computers')
    })

    it('adds a new computer', () => {
        
        // Test data - should really be in 'fixtures'
        var computer = { 
            name: 'Sega Dreamcast',
            introduced_date: '1999-01-01',
            discontinued_date: '1999-01-02',
            company: 'RCA',
        }

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
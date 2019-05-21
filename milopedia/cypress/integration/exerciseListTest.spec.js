describe('test exerciseList and details', function(){

    beforeEach(function(){
        cy.visit('http://localhost:4200/login');
        cy.get('[data-cy=login-email]').type('tim.geldof@outlook.com');
        cy.get('[data-cy=login-password]').type('P@ssword1');
        cy.get('[data-cy=login-button]').click();
        cy.contains('tim.geldof@outlook.com');
    });

    it('check if the exercises are loaded properly', () => {
        cy.visit('http://localhost:4200/');
        cy.contains('View details')
    });
    it('check if add exercise link in main nav works',() => {
        cy.get('[data-cy=add]').click();
        cy.url().should('include','/exercise/add')
    });
    it('check if add exercise link in main nav works',() => {
        cy.get('[data-cy=myEx]').click();
        cy.url().should('include','/exercise/athlete')
    });
    it('check if add exercise link in main nav works',() => {
        cy.get('[data-cy=myEx]').click();
        cy.url().should('include','/exercise/athlete')
    });

})
describe('Login', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('host')+'/login.php')
    })

    it('Input username', () => {
        cy.get('#loginpage .username')
            .type(Cypress.env('username'))
            .should('have.value', Cypress.env('username'))
    })

    it('Input password', () => {
        cy.get('#loginpage .password')
            .type(Cypress.env('password'))
            .should('have.value', Cypress.env('password'))
    })

    it('Press login', () => {
        cy.get('#loginpage .username')
            .type(Cypress.env('username'));

        cy.get('#loginpage .password')
            .type(Cypress.env('password'));

        cy.get('#loginpage .btn-login').click();
        
        cy.url().should('include', '/dashboard')
    })
})
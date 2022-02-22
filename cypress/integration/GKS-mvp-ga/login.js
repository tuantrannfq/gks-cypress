describe('Login', () => {
    beforeEach(() => {
        cy.visit('http://mvpga.local/login.php')
    })

    it('Input username', () => {
        cy.get('#loginpage .username')
            .type('admin')
            .should('have.value', 'admin')
    })

    it('Input password', () => {
        cy.get('#loginpage .password')
            .type('12345678')
            .should('have.value', '12345678')
    })

    it('Press login', () => {
        cy.get('#loginpage .username')
            .type('admin');

        cy.get('#loginpage .password')
            .type('12345678');

        cy.get('#loginpage .btn-login').click();
        
        cy.url().should('include', '/dashboard')
    })
})
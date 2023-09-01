describe('Login de Sucesso', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    });
    it('Realizar login', () => {
        cy.login('lucasdias', 'lucasdias123')
        // cy.get('[data-test="loginUserName"]').type('lucasdias')
        // cy.get('[data-test="loginPassword"]').type('lucasdias123')
        // cy.get('[data-test="loginBtn"]').click()

        cy.get('.navbar-light:nth-child(1) > div  > a.mr-1').should('have.text' , 'lucasdias')

    });
    
});
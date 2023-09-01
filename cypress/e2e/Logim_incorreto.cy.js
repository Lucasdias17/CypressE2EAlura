///<reference types="Cypress"/>

describe('Login incorreto', () => {
    it('Tentativa de login com campos vazios', () => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

        
        cy.get('[data-test="loginBtn"]').should('be.disabled')  
        
        cy.contains('User name is required!').should('be.visible')
        cy.get('.form-group:nth-child(2) > ap-vmessage > .text-danger').should('be.visible') 

    });
    it('Tentativa de logim com dados incorreto', () => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

        cy.get('[data-test="loginUserName"]').type('lucasdias')
        cy.get('[data-test="loginPassword"]').type('lucasdias12')
        cy.get('[data-test="loginBtn"]').click()

        cy.on('window:alert', (text) => {
            expect(text).to.contains('Invalid user name or password');
          });
        
    });
    it('Conferir a habilitação do botão de login', () => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

        cy.get('[data-test="loginUserName"]').type('lucasdias')
        cy.get('[data-test="loginPassword"]').type('lucasdias12')
        
        cy.get('[data-test="loginBtn"]').should('be.enabled')  

    });
    it.only('Tentativa de logim com dados incorreto com duble de testes', () => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

        cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login',{
            statusCode: 401
        }).as('stuPost')

        cy.login('lucas', 'dias')
        cy.wait('@stuPost')

    });
    
});
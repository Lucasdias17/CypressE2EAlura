///<reference types="Cypress"/>
describe('Página de Cadastro', () => {
    
    it('Tentatica de cadastro com campos em branco', () => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

        cy.get('a[data-test="register"]').click()
        cy.contains('button', 'Register').click()
        cy.contains('button', 'Register').click()
        cy.contains('Email is required!').should('be.visible')
        cy.get('div :nth-child(2) > ap-vmessage > small').should('be.visible')
        cy.get('div :nth-child(3) > ap-vmessage > small').should('have.text', 'User name is required!')
        cy.get('div :nth-child(4) > ap-vmessage > small').should('have.text', 'Password is required!')

    });
    it('Tentativa de cadastro com email incorreto', () => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

        cy.get('a[data-test="register"]').click()
        cy.get('input[ng-reflect-name="email"]').type('lucas')

        cy.contains('button', 'Register').click()

        cy.contains('Invalid e-mail').should('be.visible')
        
    });
    it('Tentativa de cadastro com usuario já utilizado', () => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

        cy.get('a[data-test="register"]').click()
        cy.get('input[ng-reflect-name="email"]').type('lucas@teste.com')
        cy.get('input[ng-reflect-name="fullName"]').type('Lucas Dias')
        cy.get('input[ng-reflect-name="userName"]').type('lucasdias')
        cy.get('input[ng-reflect-name="password"]').type('lucasdias123')

        cy.contains('button', 'Register').click()

        cy.contains('Username already taken').should('be.visible')
        cy.get('div :nth-child(3) > ap-vmessage > small').should('have.text', 'Username already taken')

    });
});
///<reference types="Cypress"/>
describe('Página de Cadastro', () => {
    beforeEach(()=>{
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })

    const usuarios = require('../fixtures/usuarios.json')
    usuarios.forEach(usuarios =>{
        it('Cadastro de novo usuario com sucesso com a massa de dados', () => {
    
            cy.get('a[data-test="register"]').click()
            cy.get('input[ng-reflect-name="email"]').type(usuarios.email)
            cy.get('input[ng-reflect-name="fullName"]').type(usuarios.fullName)
            cy.get('input[ng-reflect-name="userName"]').type(usuarios.userName)
            cy.get('input[ng-reflect-name="password"]').type(usuarios.password)
            cy.contains('button', 'Register').click()
    
            cy.get('small[class="text-success"]').should('have.text', 'User available')
        });
    } )

    it('Cadastro de novo usuario com sucesso', () => {

        cy.get('a[data-test="register"]').click()
        cy.get('input[ng-reflect-name="email"]').type('lucas@teste.com')
        cy.get('input[ng-reflect-name="fullName"]').type('Lucas Dias')
        cy.get('input[ng-reflect-name="userName"]').type('lucasdias1')
        cy.get('input[ng-reflect-name="password"]').type('lucasdias123')
        cy.contains('button', 'Register').click()

        cy.get('small[class="text-success"]').should('have.text', 'User available')
    });
   
});
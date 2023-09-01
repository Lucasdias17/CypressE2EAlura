const el = require('./elements').ELEMENTS

class Cadastro {
    acessarPaginaCadastro(){
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
        cy.get('a[data-test="register"]').click()
    }
    
    preencherFormCadastro(){
        cy.get('input[ng-reflect-name="email"]').type('lucas@teste.com')
        cy.get('input[ng-reflect-name="fullName"]').type('Lucas Dias')
        cy.get('input[ng-reflect-name="userName"]').type('lucasdias1')
        cy.get('input[ng-reflect-name="password"]').type('lucasdias123')

    }
    registerCadastro(){
        cy.contains('button', 'Register').click()
    }
}   


export default new Cadastro()
///<reference types="Cypress"/>

import Cadastro from '../support/pages/Cadastros/paginaCadastro'

describe('Página de Cadastro utilizando o Page Object', () => {
    beforeEach(()=>{
        Cadastro.acessarPaginaCadastro()
    })
        it('Cadastro de novo usuario com sucesso com a massa de dados', () => {

            Cadastro.preencherFormCadastro()
            Cadastro.registerCadastro()    
    
            cy.get('small[class="text-success"]').should('have.text', 'User available')
        });
   
});
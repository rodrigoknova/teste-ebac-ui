/// <reference types="cypress" />
var faker = require('faker');


describe('Funcionalidade Pré Cadastro', () => {

  beforeEach(() => {
    cy.visit('minha-conta')
  });
  
  
    
    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)
        
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('!teste@testes$')
        cy.get(':nth-child(4) > .button').click()
        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });

    it.only('Deve completar o pré cadastro com sucesso - Usando comandos customizados', () => {
      let emailFaker2 = faker.internet.email()
      cy.preCadastro(emailFaker2, 'senha@#forte', 'Rodrigo', 'Chux')
      cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });
});
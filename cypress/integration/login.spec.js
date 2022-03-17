/// <reference types="cypress" />

context('Funcionalidade Login', () =>{
   
    it('Deve fazer login com sucesso' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain' , 'não está registrado')
    })   
    it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('blar')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Perdeu a senha?')
    })   
})
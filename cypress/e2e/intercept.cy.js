/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')
const { profilePage } = require("../support/pages/profile.page.js")
const { homePage } = require("../support/pages/home.page.js");

describe('Teste de Autenticação', () => {

  before(() => {
   
  })

  beforeEach(() => {
    cy.login(email, senha)
  })

  it('deve visitar as categorias', () => {
    cy.intercept('GET', '**/public/getCategories', { fixture: 'categories.json' }).as('getCategories')
    homePage.opensearchProduct()
    homePage.opencategoriesFilter()
    cy.wait('@getCategories').its('response.statusCode').should('eq', 200)
    homePage.validação().should('have.length.greaterThan', 1)
  })

  it('deve sem categorias', () => {
    cy.intercept('GET', '**/public/getCategories', { fixture: 'nocategories.json' }).as('getNoCategories')
    homePage.opensearchProduct()
    homePage.opencategoriesFilter()
    //cy.wait('@getCategories').its('response.statusCode').should('eq', 200)
    homePage.validação().should('have.length', 1)
  })

  it('deve sem categorias e ERRO', () => {
    cy.intercept('GET', '**/public/getCategories', {statusCode: 500 }).as('getCategoriesErro')
    homePage.opensearchProduct()
    homePage.opencategoriesFilter()
    //cy.wait('@getCategories').its('response.statusCode').should('eq', 200)
    homePage.validação().should('have.length', 1)
  })


  afterEach(() => {
    // Limpar dados ou cookies, se necessário
  })

  after(() => {
    // Restaura configurações globais, se necessário
  })
})

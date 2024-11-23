// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })// cypress/support/commands.js

beforeEach(() => {
    
    cy.setCookie('ebacstoreversion', 'v2');
  
    
    cy.visit('http://lojaebac.ebaconline.art.br/'); 
  });


Cypress.Commands.add('login', (email, password) => {
    cy.get('[href="/Tab/Account"] > .r-g6644c').click();  
    cy.get('[data-testid="email"]').type(email);  
    cy.get('[data-testid="password"]').type(password);  
    cy.get('[data-testid="btnLogin"]').click(); 
  });
  
Cypress.Commands.add('addItemToCart', () => {
  
  cy.get('[data-testid="__CAROUSEL_ITEM_0_READY__"] > .r-1kihuf0 > .r-1jnx3et > .r-13w96dm > [data-testid="banner"]', { timeout: 15000 })
    .should('be.visible')
    .click(); 
  

  cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]', { timeout: 15000 })
    .should('be.visible')
    .click(); 
  
  
  cy.get('[data-testid="addToCart"] > .css-146c3p1', { timeout: 15000 })
    .should('be.visible')
    .click(); 


  cy.get('[href="/Tab/Home"] > .r-g6644c').click();  
  
  
  cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .css-146c3p1').click();  // Volta para o carrinho
});


Cypress.Commands.add('completeCheckout', () => {
  
  cy.get('[data-testid="selectAddressOrContinueToPayment"]', { timeout: 10000 })
    .should('be.visible')
    .click();  

  
  cy.get('[data-testid="completeCheckout"]', { timeout: 10000 })
    .should('be.visible')
    .click(); 
});

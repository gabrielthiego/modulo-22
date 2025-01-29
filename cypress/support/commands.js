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
  cy.contains('[data-testid="banner"]', 'Start Shopping', { timeout: 15000 })
    .should('be.visible')
    .click();  
  
  cy.get('[data-testid="productDetails"]', { timeout: 15000 })
    .first()
    .click({ force: true });
  
  cy.get('[data-testid="addToCart"] > .css-146c3p1', { timeout: 15000 })
    .should('be.visible')
    .click(); 

  cy.get('[href="/Tab/Home"] > .r-g6644c').click();  

  cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .r-lrvibr').click();
});

Cypress.Commands.add('completeCheckout', () => {
  cy.get('[data-testid="selectAddressOrContinueToPayment"]', { timeout: 10000 })
    .should('be.visible')
    .click();  

  cy.get('[data-testid="completeCheckout"]', { timeout: 10000 })
    .should('be.visible')
    .click(); 
});

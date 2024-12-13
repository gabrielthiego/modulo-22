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

  cy.get('.css-146c3p1.r-lrvibr').parent().first().click();
});

Cypress.Commands.add('completeCheckout', () => {
  cy.get('[data-testid="selectAddressOrContinueToPayment"]', { timeout: 10000 })
    .should('be.visible')
    .click();

  cy.get('[data-testid="completeCheckout"]', { timeout: 10000 })
    .should('be.visible')
    .click();
});

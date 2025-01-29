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

  // Esperar confirmação de adição ao carrinho antes de continuar
  cy.get('[data-testid="cart-icon"]', { timeout: 5000 })  // Ajuste o seletor de carrinho conforme necessário
    .should('contain', '1 item')  // Ou ajuste para o comportamento do carrinho
    .should('be.visible');

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

  // Esperar confirmação de finalização de checkout, se aplicável
  cy.get('[data-testid="checkoutConfirmation"]', { timeout: 5000 })
    .should('be.visible');
});


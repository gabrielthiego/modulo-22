Cypress.Commands.add('addItemToCart', () => {
  // Verifica e clica no banner para iniciar a compra
  cy.contains('[data-testid="banner"]', 'Start Shopping', { timeout: 15000 })
    .should('be.visible')
    .click();

  // Acessa os detalhes do primeiro produto
  cy.get('[data-testid="productDetails"]', { timeout: 15000 })
    .first()
    .click({ force: true });

  // Clica no botão de adicionar ao carrinho
  cy.get('[data-testid="addToCart"] > .css-146c3p1', { timeout: 15000 })
    .should('be.visible')
    .click();

  // Espera que o ícone do carrinho tenha a quantidade correta de itens
  cy.get('[data-testid="cart-icon"]', { timeout: 5000 })
    .should('contain', '1 item')  // Ou ajusta para o comportamento correto do carrinho
    .should('be.visible');

  // Volta para a página inicial
  cy.get('[href="/Tab/Home"] > .r-g6644c').click();

  // Clica no primeiro produto novamente (se necessário para a navegação do fluxo)
  cy.get('.css-146c3p1.r-lrvibr').parent().first().click();
});

Cypress.Commands.add('completeCheckout', () => {
  // Verifica e clica para selecionar o endereço ou continuar para o pagamento
  cy.get('[data-testid="selectAddressOrContinueToPayment"]', { timeout: 10000 })
    .should('be.visible')
    .click();

  // Confirma a finalização do checkout
  cy.get('[data-testid="completeCheckout"]', { timeout: 10000 })
    .should('be.visible')
    .click();

  // Espera confirmação de finalização do checkout
  cy.get('[data-testid="checkoutConfirmation"]', { timeout: 5000 })
    .should('be.visible');
});

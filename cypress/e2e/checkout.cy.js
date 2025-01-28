describe('Fluxo de Compra após Login - EBAC Store', () => {
  beforeEach(() => {
    
    const email = 'admin@admin.com'; 
    const password = 'admin123'; 
   // Faz o login antes de cada teste
  });

  it('Deve adicionar o item ao carrinho e finalizar a compra', () => {
    cy.addItemToCart(); // Adiciona um item ao carrinho
    cy.completeCheckout(); // Completa o checkout
    cy.contains('Go Back Home').should('be.visible'); // Verifica se o botão "Go Back Home" está visível após o checkout
  });
});

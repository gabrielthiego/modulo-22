

describe('Fluxo de Compra após Login - EBAC Store', () => {
    beforeEach(() => {
      const email = 'teste@exemplo.com'; 
      const password = 'senha123'; 
      cy.login(email, password); 
    });
  
    it('Deve adicionar o item ao carrinho e finalizar a compra', () => {
      cy.addItemToCart(); 
  
      cy.completeCheckout(); 
  
      
      cy.contains('Go Back Home').should('be.visible'); 
    });
  });
  
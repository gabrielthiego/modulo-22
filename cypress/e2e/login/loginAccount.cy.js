describe('Fluxo de Login - EBAC Store', () => {
    beforeEach(() => {
     
      cy.get('[href="/Tab/Account"] > .r-g6644c').click();
    });
  
    it('Deve fazer login com sucesso e verificar no Profile', () => {
      const userData = {
        email: 'teste@exemplo.com',  
        password: 'senha123',        
      };
  
      
      cy.get('[data-testid="email"]').type(userData.email);
  
      
      cy.get('[data-testid="password"]').type(userData.password);
  
      
      cy.get('[data-testid="btnLogin"]').click();
  
      
      cy.get('[href="/Tab/Account"] > .r-g6644c').click();
  
      
      cy.get('[data-testid="CustomerName"]').should('exist');
    });
  });
  
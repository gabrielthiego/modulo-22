
import SignupPage from '../../pages/SignupPage';

describe('Fluxo de Criação de Conta - EBAC Store', () => {
  it('Deve criar uma conta com sucesso e verificar no Profile', () => {
    const userData = {
      firstName: 'Teste',
      lastName: 'Sobrenome',
      phone: '1234567890',
      email: 'teste1@exemplo.com',
      password: 'senha123',
    };

    
    SignupPage.visit();

   
    SignupPage.fillForm(userData);

    
    SignupPage.submit();

    
    cy.get('[href="/Tab/Account"] > .r-g6644c').click();

    
    cy.get('[data-testid="CustomerName"]').should('exist');
  });
});


class SignupPage {
   
    visit() {
      cy.get('[href="/Tab/Account"] > .r-g6644c').click();
      cy.get('[data-testid="signUp"] > .css-146c3p1').click();
    }
  
    //  cadastro
    fillForm(userData) {
      cy.get('[data-testid="firstName"]').type(userData.firstName);
      cy.get('[data-testid="lastName"]').type(userData.lastName);
      cy.get('[data-testid="phone"]').type(userData.phone);
      cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]').type(userData.email);
      cy.get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-mh9cjk > .r-150rngu > [style="padding-top: 120px;"] > :nth-child(8) > .css-175oi2r').type(userData.password);
      cy.get('[data-testid="repassword"]').type(userData.password);
    }
  
    
    submit() {
      cy.get('[data-testid="create"]').click();
    }
  }
  
  export default new SignupPage();
  
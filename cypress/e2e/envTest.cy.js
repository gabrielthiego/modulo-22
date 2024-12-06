/// <reference types="cypress" />

describe('Environment Variables Test', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', Cypress.env("ebacStoreVersion"), { domain: 'lojaebac.ebaconline.art.br' });

    const envPath = Cypress.env("MY_ENV") || "local"; // Define 'local' como padrão caso MY_ENV não esteja definido
    cy.fixture(`${envPath}/data.json`).then(data => {
      cy.log(data.email);
    });

  });

  it('Default env', () => {
    cy.log(Cypress.env('MY_ENV'));
    cy.log(Cypress.env('ebacStoreVersion'));

    cy.visit("/");
  });

  it('Config test env', {
    env: {
      MY_ENV: "local"
    }
  }, () => {
    cy.log(Cypress.env('MY_ENV'));
    cy.log(Cypress.env('ebacStoreVersion'));

    cy.visit("/");
  });

});

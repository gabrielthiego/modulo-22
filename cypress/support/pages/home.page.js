/// <reference types="cypress" />

export const homePage = {
    openMenu(menu){
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },

    opensearchProduct(product){
        cy.get('[data-testid="search-products"]').click()
    },
    opencategoriesFilter(){
        cy.get('[data-testid="Category"]').click()

    },
    validação(){
       return cy.get('[data-testid^="search-category-"]')

    }

}
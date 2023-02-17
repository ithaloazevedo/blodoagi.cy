class searchPage {
    abrirSearchBox() {
        cy.get('#search-open').should('be.visible')
        // Clicar na lupa
        cy.get('#search-open').click()
        // Validar aparição da box de pesquisa
        cy.get('.desktop-search').should('be.visible')
    }

    pesquisarTermo(string) {
        // Inserir termo "carnaval"
        cy.get('.desktop-search > .search-form > label > .search-field').click()
        cy.get('.desktop-search > .search-form > label > .search-field').type(string)
        // Realizar busca
        cy.get('.desktop-search > .search-form > .search-submit').click()
        cy.get('.archive-title > span').should('have.text', string)
    }

    pesquisarTermoInvalido(string) {
        // Inserir termo "carnaval"
        cy.get('.desktop-search > .search-form > label > .search-field').click()
        cy.get('.desktop-search > .search-form > label > .search-field').type(string)
        // Realizar busca
        cy.get('.desktop-search > .search-form > .search-submit').click()
    }




}
export default searchPage;

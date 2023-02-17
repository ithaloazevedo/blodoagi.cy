import searchPage from "../pages/searchPage";

describe('Busca de posts', () => {
    var search = new searchPage()
    beforeEach(() => {
        //Setar resolução
        cy.viewport(1440, 900)
        //Redirecionar navegador para a url
        cy.visit('https://blogdoagi.com.br')
    });

    it('Pesquisar pelo termo "Carnaval"', () => {
        search.abrirSearchBox()
        search.pesquisarTermo('carnaval')
        //Validar que artigos apareceram
        cy.get('article').should('exist')
    });

    it('Pesquisar por termo vazio', () => {
        search.abrirSearchBox()
        search.pesquisarTermo(' ')
        //Validar que artigos apareceram
        cy.get('article').should('exist')
    })

    it('Pesquisar por termo inválido', () => {
        search.abrirSearchBox()
        search.pesquisarTermoInvalido('blablajbklajlkfjadfl')
        //Validar que a mensagem de nenhum resultado apareceu
        cy.get('.entry-title').should('have.text', 'Nenhum resultado')
        //Validar que nenhum artigo apareceu 
        cy.get('article').should('not.exist')

    })

    it('Validar aparição do widget de assinatura por e-mail', () => {
        search.abrirSearchBox()
        search.pesquisarTermo(' ')
        cy.get('#blog_subscription-3').should('be.visible')
    });

    it('Cancelar busca', () => {
        search.abrirSearchBox()
        cy.get('.desktop-search > .search-form > label > .search-field').click()
        cy.get('.desktop-search > .search-form > label > .search-field').type('teste')
        // Fechar box de pesquisa
        cy.get('#search-open').click()
        // Validar que box de pesquisa não está visível
        cy.get('.desktop-search').should('not.be.visible')

    });
})
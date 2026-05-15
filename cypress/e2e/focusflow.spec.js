describe('Teste de Integração - FocusFlow Web', () => {
    beforeEach(() => {
        // Usa apenas a barra para indicar a raiz do servidor atual
        cy.visit('/');
    });

    it('Deve atualizar a frase motivacional ao consumir a API externa no clique de Iniciar', () => {
        cy.intercept('GET', '**/api/quotes/random', {
            quote: "Testando a integração da API com sucesso!",
            author: "Linter Robot"
        }).as('getQuote');

        cy.get('#taskInput').type('Estudar Engenharia de Software');
        cy.get('#btnStart').click();

        cy.wait('@getQuote');

        cy.get('#quoteText').should('contain', 'Testando a integração da API com sucesso!');
        cy.get('#quoteAuthor').should('contain', '- Linter Robot');
        cy.get('#statusLabel').should('contain', 'Foco Ativo!');
    });
});
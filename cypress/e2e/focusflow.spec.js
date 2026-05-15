describe('Teste de Integração - FocusFlow Web', () => {
    beforeEach(() => {
        // Alinha o teste com a pasta do seu HTML rodando no Live Server local
        cy.visit('FocusFlow/index.html');
    });

    it('Deve atualizar a frase motivacional ao consumir a API externa no clique de Iniciar', () => {
        // Intercepta a requisição da API externa para simular uma resposta estável (Mocking)
        cy.intercept('GET', '**/api/quotes/random', {
            quote: "Testando a integração da API com sucesso!",
            author: "Linter Robot"
        }).as('getQuote');

        // Digita uma tarefa e clica em iniciar
        cy.get('#taskInput').type('Estudar Engenharia de Software');
        cy.get('#btnStart').click();

        // Aguarda a chamada da API acontecer
        cy.wait('@getQuote');

        // Valida se o dado retornado pela API foi renderizado com sucesso na tela
        cy.get('#quoteText').should('contain', 'Testando a integração da API com sucesso!');
        cy.get('#quoteAuthor').should('contain', '- Linter Robot');
        cy.get('#statusLabel').should('contain', 'Foco Ativo!');
    });
});
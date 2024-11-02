describe('Testes de Adição ao Carrinho na Amazon', () => {
  beforeEach(() => {
      // Visitar a página inicial da Amazon
      cy.visit('https://www.amazon.com/');
  });

  it('Deve adicionar um item ao carrinho e ir para o carrinho', () => {
      // Passo 1: Pesquisar por um produto (ex: laptop)
      cy.get('#twotabsearchtextbox')
          .type('laptop{enter}');

      // Passo 2: Selecionar o primeiro item da lista de resultados
      cy.get('.s-main-slot .s-result-item')
          .first()
          .click();

      // Passo 3: Esperar o botão "Adicionar ao carrinho" estar visível e clicável
      cy.get('#a-autoid-2-announce') // Seleciona o botão "Adicionar ao carrinho"
          .should('be.visible') // Assegura que o botão está visível
          .and('not.be.disabled') // Assegura que o botão não está desabilitado
          .click(); // Clica para adicionar o item ao carrinho

      // Passo 4: Verificar o contador do carrinho
      cy.get('#nav-cart-count-container') // Seleciona o contador do carrinho
          .should('contain', '1'); // Verifica se o contador do carrinho mostra '1'

      // Passo 5: Ir para o carrinho
      cy.get('#nav-cart-count-container') // Seleciona o botão que exibe o número do carrinho
          .click(); // Clica no botão do carrinho
  });
});

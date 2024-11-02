describe('Testes de Login na Amazon', () => {
  it('deve fazer login com credenciais válidas', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type('testedeqa64@gmail.com'); //e-mail válido
    cy.get('#continue').click();
    cy.get('#ap_password').type('260541Sa@'); //senha válida
    cy.get('#signInSubmit').click();
    cy.url().should('include', '/ref=nav_youraccount_btn');
  });

  it('deve mostrar um erro para login inválido', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type('testedeqa63@gmail.com'); //e-mail inválido
    cy.get('#continue').click();
    cy.get('#ap_password').type('260541SA@@'); //inválida
    cy.get('#signInSubmit').click();
    cy.get('.a-alert-content').should('contain', 'Sua senha está incorreta');
  });
});

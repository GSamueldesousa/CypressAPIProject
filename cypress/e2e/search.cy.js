describe('Product Search Tests on Amazon', () => {
  it('should return results for a valid search term', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('#twotabsearchtextbox').type('laptop{enter}');
    cy.get('.s-search-results').should('contain', 'laptop');
  });

  it('should show no results for an invalid search term', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('#twotabsearchtextbox').type('abcdefghij123456{enter}');
    cy.get('.s-main-slot').should('contain', 'No results for');
  });
});

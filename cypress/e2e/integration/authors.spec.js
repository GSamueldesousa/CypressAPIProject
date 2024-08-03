describe('API Tests for Authors', () => {
  it('should get all authors', () => {
    cy.request('GET', '/api/v1/Authors')
      .its('status')
      .should('equal', 200);
  });

  it('should create a new author', () => {
    cy.request('POST', '/api/v1/Authors', {
      id: 0,
      idBook: 1,
      firstName: 'John',
      lastName: 'Doe',
    }).its('status').should('equal', 200);
  });

  it('should get a specific author by id', () => {
    cy.request('GET', '/api/v1/Authors/1')
      .its('status')
      .should('equal', 200);
  });

  it('should update an author by id', () => {
    cy.request('PUT', '/api/v1/Authors/1', {
      id: 1,
      idBook: 1,
      firstName: 'Jane',
      lastName: 'Doe',
    }).its('status').should('equal', 200);
  });

  it('should delete an author by id', () => {
    cy.request('DELETE', '/api/v1/Authors/1')
      .its('status')
      .should('equal', 200);
  });
});

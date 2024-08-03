describe('API Tests for Books', () => {
  it('should get all books', () => {
    cy.request('GET', '/api/v1/Books')
      .its('status')
      .should('equal', 200);
  });

  it('should create a new book', () => {
    cy.request('POST', '/api/v1/Books', {
      id: 0,
      title: 'New Book',
      description: 'Description of new book',
      pageCount: 200,
      excerpt: 'Excerpt of new book',
      publishDate: '2024-08-01T00:00:00.000Z',
    }).its('status').should('equal', 200);
  });

  it('should get a specific book by id', () => {
    cy.request('GET', '/api/v1/Books/1')
      .its('status')
      .should('equal', 200);
  });

  it('should update a book by id', () => {
    cy.request('PUT', '/api/v1/Books/1', {
      id: 1,
      title: 'Updated Book',
      description: 'Updated description',
      pageCount: 300,
      excerpt: 'Updated excerpt',
      publishDate: '2024-08-01T00:00:00.000Z',
    }).its('status').should('equal', 200);
  });

  it('should delete a book by id', () => {
    cy.request('DELETE', '/api/v1/Books/1')
      .its('status')
      .should('equal', 200);
  });
});

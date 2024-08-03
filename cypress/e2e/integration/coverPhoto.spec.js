describe('API Tests for Cover Photos', () => {
    it('should get all cover photos', () => {
      cy.request('GET', '/api/v1/CoverPhotos')
        .its('status')
        .should('equal', 200);
    });
  
    it('should create a new cover photo', () => {
      cy.request('POST', '/api/v1/CoverPhotos', {
        id: 0,
        idBook: 1,
        url: 'http://example.com/photo.jpg'
      }).its('status').should('equal', 200);
    });
  
    it('should get a specific cover photo by id', () => {
      cy.request('GET', '/api/v1/CoverPhotos/1')
        .its('status')
        .should('equal', 200);
    });
  
    it('should update a cover photo by id', () => {
      cy.request('PUT', '/api/v1/CoverPhotos/1', {
        id: 1,
        idBook: 1,
        url: 'http://example.com/updated_photo.jpg'
      }).its('status').should('equal', 200);
    });
  
    it('should delete a cover photo by id', () => {
      cy.request('DELETE', '/api/v1/CoverPhotos/1')
        .its('status')
        .should('equal', 200);
    });
  });
  
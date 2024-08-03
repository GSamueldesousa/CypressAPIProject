describe('API Tests for Users', () => {
    it('should get all users', () => {
      cy.request('GET', '/api/v1/Users')
        .its('status')
        .should('equal', 200);
    });
  
    it('should create a new user', () => {
      cy.request('POST', '/api/v1/Users', {
        id: 0,
        userName: 'new_user',
        password: 'password123'
      }).its('status').should('equal', 200);
    });
  
    it('should get a specific user by id', () => {
      cy.request('GET', '/api/v1/Users/1')
        .its('status')
        .should('equal', 200);
    });
  
    it('should update a user by id', () => {
      cy.request('PUT', '/api/v1/Users/1', {
        id: 1,
        userName: 'updated_user',
        password: 'new_password123'
      }).its('status').should('equal', 200);
    });
  
    it('should delete a user by id', () => {
      cy.request('DELETE', '/api/v1/Users/1')
        .its('status')
        .should('equal', 200);
    });
  });
  
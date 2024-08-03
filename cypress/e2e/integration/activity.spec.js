describe('API Tests for Activities', () => {
    it('should get all activities', () => {
      cy.request('GET', '/api/v1/Activities')
        .its('status')
        .should('equal', 200);
    });
  
    it('should create a new activity', () => {
      cy.request('POST', '/api/v1/Activities', {
        id: 0,
        title: 'New Activity',
        dueDate: '2024-08-01T00:00:00.000Z',
        completed: false
      }).its('status').should('equal', 200);
    });
  
    it('should get a specific activity by id', () => {
      cy.request('GET', '/api/v1/Activities/1')
        .its('status')
        .should('equal', 200);
    });
  
    it('should update an activity by id', () => {
      cy.request('PUT', '/api/v1/Activities/1', {
        id: 1,
        title: 'Updated Activity',
        dueDate: '2024-08-01T00:00:00.000Z',
        completed: true
      }).its('status').should('equal', 200);
    });
  
    it('should delete an activity by id', () => {
      cy.request('DELETE', '/api/v1/Activities/1')
        .its('status')
        .should('equal', 200);
    });
  });
  
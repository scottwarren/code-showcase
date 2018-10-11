context('API', () => {
  Cypress.config('baseUrl', 'http://localhost:3001')
  
  describe('Messages endpoint @ `/messages`', () => {
    it('contains expected data structure', () => {
      cy.request('GET', '/messages')
        .its('body')
        .should('have.all.keys', ['messages', 'message', 'success'])
        .its('messages')
        .should('be.length.gt', 0)
    })

    it('returns JSON', () => {
      cy.request('/messages')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
    })

    it('shows a missing route for POST requests', () => {
      cy.request({
        url: '/messages',
        method: 'POST',
        failOnStatusCode: false,
      })
        .its('status')
        .should('be', 404)
    })
  })
})
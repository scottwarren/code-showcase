context('API', () => {
  Cypress.config('baseUrl', 'http://localhost:3001')
  
  describe('Root endpoint @ `/`', () => {
    it('should exist and return a response', () => {
      cy.request('GET', '/')
        .its('body')
        .should('contain', 'Work work!')
    })

    it('should show a missing route for POST requests', () => {
      cy.request({
        url: '/',
        method: 'POST',
        failOnStatusCode: false,
      })
        .its('status')
        .should('be', 404)
    })
  })
})
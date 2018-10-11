context('Meta', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  describe('Meta information should exist in the application', () => {
    it('should contain the expected title', () => {
      cy.title().should('contain', 'Get Selected')
    })

    it('should display the logo', () => {
      cy.get('div.Header-logo')
        .should('have.descendants', 'img')

      cy.get('div.Header-logo > img.Header-logo')
        .should('be.visible')
    })
  })
})
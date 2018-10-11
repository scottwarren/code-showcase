context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should not show new messages by default', () => {
    cy.get('.Header-container').not('contain', '.UnreadStatus-badge')
  })
})

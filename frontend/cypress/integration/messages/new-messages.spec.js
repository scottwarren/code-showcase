context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('New messages should be represented in the header', () => {
    it('should not show new messages by default', () => {
      cy.get('.Header-container')
        .not('contain', '.UnreadStatus-badge')
        .not('contain', 'New')
    })

    it('should generate a new unread message', () => {
      // Get existing count of messages?

      cy.get('.NewMessageGenerator-button').click()

      cy.get('.UnreadStatus-badge').should('contain', 'New')
    })
  })
})

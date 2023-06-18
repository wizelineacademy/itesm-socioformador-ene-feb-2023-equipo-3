describe('Profile Past Work Edit Button', () => {
    it('profile past work edit button should show you the edit past work page', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('#PastWorkEditButton').click()
      cy.url().should('eq', 'http://localhost:3000/editPastWork')
    })
  })
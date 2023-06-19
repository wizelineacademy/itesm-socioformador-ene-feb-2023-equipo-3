describe('Profile: Get current User About Me', () => {
    it('Tests that profile is retrieving the current users Aboout Me', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('p').should('contain', 'This is an about me.')
    })
  })
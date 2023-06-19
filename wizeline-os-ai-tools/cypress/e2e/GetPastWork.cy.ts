describe('Profile: Get Past Work', () => {
    it('Tests that profile Past Work section retrieves user information', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('h1').should('contain', 'Junior Project Manager')
    })
  })
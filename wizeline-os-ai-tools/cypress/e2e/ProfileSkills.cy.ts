describe('Profile Skills', () => {
    it('profile should show skills of the current user', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('span').should('contain', 'Haskell')
    })
  })
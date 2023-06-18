describe('Profile Education', () => {
    it('profile should show education of the current user', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('p').should('contain', 'Tecnológico de Monterrey')
    })
  })
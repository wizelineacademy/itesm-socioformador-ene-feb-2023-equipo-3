describe('Profile Past Works', () => {
    it('profile should show past work title of the current user', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('h1').should('contain', 'Data Analyst Senior')
    })
  })
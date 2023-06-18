describe('Profile General Info', () => {
    it('profile should show general info of the current user', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('p').should('contain', 'Eduardo Hernández')
    })
  })
describe('Profile: About Me Edit Button', () => {
    it('Tests edit About Me functionality to redirect to page', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('#AboutEditButton').click()
      cy.url().should('eq', 'http://localhost:3000/editAbout?description=This+is+an+about+me.')
    })
})

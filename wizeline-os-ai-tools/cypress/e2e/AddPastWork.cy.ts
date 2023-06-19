describe('Profile: Past Work Add Button', () => {
    it('Tests add Past Work functionality to redirect to page', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('#PastWorkAddButton').click()
      cy.url().should('eq', 'http://localhost:3000/addPastWork')
    })
})
describe('Profile: Education Edit Button', () => {
    it('Tests edit Education functionality to redirect to page', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('#EducationEditButton').click()
      cy.url().should('eq', 'http://localhost:3000/editEducation')
    })
})

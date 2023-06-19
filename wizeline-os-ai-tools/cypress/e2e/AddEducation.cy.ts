describe('Profile: Education Add Button', () => {
    it('Tests add Education functionality to redirect to page', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('#EducationAddButton').click()
      cy.url().should('eq', 'http://localhost:3000/addEducation')
    })
})
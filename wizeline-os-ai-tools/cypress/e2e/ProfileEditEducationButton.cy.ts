describe('Profile Education Edit Button', () => {
    it('profile education edit button should show you the edit education page', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('#EducationEditButton').click()
      cy.url().should('eq', 'http://localhost:3000/editEducation')
    })
  })
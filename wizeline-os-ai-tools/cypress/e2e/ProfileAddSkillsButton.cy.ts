describe('Profile Skills Add Button', () => {
    it('profile skills add button should show you the add skills page', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('#SkillsAddButton').click()
      cy.url().should('eq', 'http://localhost:3000/editSkills')
    })
  })
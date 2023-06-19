describe('Profile: Skill Add Button', () => {
    it('Tests add Skill functionality to redirect to page', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('#SkillAddButton').click()
      cy.url().should('eq', 'http://localhost:3000/editSkills')
    })
})
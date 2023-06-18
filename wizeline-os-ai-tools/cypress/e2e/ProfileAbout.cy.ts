describe('Profile About Description', () => {
  it('profile should show about description of the current user', () => {
    cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
    cy.visit('localhost:3000/profile')
    cy.get('p').should('contain', 'Eduardo is an experienced software developer with strong skills in a variety of programming languages and a solid understanding of software architecture. Their commitment to producing high-quality work and collaborating effectively with their team is unwavering.')
  })
})


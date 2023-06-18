describe('Profile About Edit Button', () => {
    it('profile about edit button should show you the edit about page', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
      cy.visit('localhost:3000/profile')
      cy.get('#AboutEditButton').click()
      cy.url().should('eq', 'http://localhost:3000/editAbout?description=Eduardo+is+an+experienced+software+developer+with+strong+skills+in+a+variety+of+programming+languages+and+a+solid+understanding+of+software+architecture.+Their+commitment+to+producing+high-quality+work+and+collaborating+effectively+with+their+team+is+unwavering.')
    })
  })
describe('Form: PDF Upload Button', () => {
    it('Tests that upload button in forms is not disabled', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER2'))
      cy.visit('localhost:3000/newUser')
      cy.get('#next0modal').click()
      cy.get('#createManually').click()
      cy.get('input[type=file]').selectFile('cypress/fixtures/CV_CristinaHP.pdf')
      cy.get('#FileUploadButton').should('not.be.disabled')
    })
})

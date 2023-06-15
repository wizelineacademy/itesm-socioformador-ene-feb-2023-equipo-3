// Prueba e2e: verifica que el usuario ingresado sea nuevo (por medio del token) y si es así lo redirecciona al formulario
describe("Login New User", () => {
  before(() => {
    cy.visit('http://localhost:3000')
    cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER'))
  })
  it("Login with Google", () => {
    cy.contains('Continue with Google').click()
    cy.visit('http://localhost:3000/profile')
    //cy.get('#name').
  })
})
import LinkedinLoginButtonUT from "@/components/unitTestComponents/LinkedinLoginButtonUT"
import "@/styles/globals.css";

describe('LinkedInLoginButton.cy.tsx', () => {
  it('should be disabled when linkedinUsername is empty', () => {
    cy.mount(<LinkedinLoginButtonUT></LinkedinLoginButtonUT>)
    
    cy.get('button').should('be.disabled')
    cy.get('input').type('jackbravo').should('have.value', 'jackbravo');
    cy.get('button').should('not.be.disabled');
  })
})
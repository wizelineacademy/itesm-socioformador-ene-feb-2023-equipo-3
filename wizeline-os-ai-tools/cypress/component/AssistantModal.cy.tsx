import AIAssistantModalUT from "@/components/unitTestComponents/AIAssistantModalUT"
import "@/styles/globals.css";

describe('AssistantModal.cy.tsx', () => {
  it('playground', () => {
    cy.viewport(1024, 768)
    cy.mount(<AIAssistantModalUT></AIAssistantModalUT>)

    cy.get('.MuiPaper-root').should('be.visible')

    cy.get('button').click();
    cy.get('.MuiButton-outlined').click();
    cy.get('.MuiDialog-root').should('not.exist');
  })
})
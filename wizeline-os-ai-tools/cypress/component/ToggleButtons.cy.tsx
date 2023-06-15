import ToggleButtonUT from "@/components/unitTestComponents/ToggleButtonUT"
import "@/styles/globals.css";

describe('ToggleButtons.cy.tsx', () => {
  it('togglebuttons should not be disabled after user clicks on an option', () => {
    cy.viewport(1024, 768)

    cy.mount(<ToggleButtonUT></ToggleButtonUT>);

    cy.get('button').click();
    cy.get('.MuiButton-contained').click();

    cy.get('[value="Knowledgeable"]').click();
    cy.get('[value="Knowledgeable"]').should('not.be.disabled');

    cy.get('[value="Entertain"]').click();
    cy.get('[value="Entertain"]').should('not.be.disabled');

    cy.get('[value="Formal"]').click();
    cy.get('[value="Formal"]').should('not.be.disabled');

  })
})
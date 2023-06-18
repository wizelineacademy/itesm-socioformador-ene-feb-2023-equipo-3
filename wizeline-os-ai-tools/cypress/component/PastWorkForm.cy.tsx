import PastWorkUT from "@/components/unitTestComponents/PastWorkUT"
import "@/styles/globals.css";

describe('PastWorkForm.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<PastWorkUT></PastWorkUT>)
    cy.get('input[id="submitButton"]').click()
    cy.get("#pastWtitle-helper-text").should("exist", "This field is required.");
  })
})
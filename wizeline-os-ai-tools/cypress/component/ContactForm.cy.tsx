import "@/styles/globals.css";
import ContactFormUT from "@/components/unitTestComponents/contactFormUT";

describe('ContactForm.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<ContactFormUT></ContactFormUT>)
  })
})
import ContactFormUT from "@/components/unitTestComponents/ContactFormUT";
import "@/styles/globals.css";

describe("ContactFormErrorLabels.cy.tsx", () => {
	it("empty inputs should show error labels when hitting submit", () => {
		cy.mount(<ContactFormUT></ContactFormUT>);
		
		cy.get('input[id="submitButton"]').click();
		cy.get("#fullName-helper-text").should("exist", "This field is required.");
		cy.get("#country-helper-text").should("exist", "This field is required.");
		cy.get("#state-helper-text").should("exist", "This field is required.");
		cy.get("#city-helper-text").should("exist", "This field is required.");
		cy.get("#phoneNumber-helper-text").should("exist", "This field is required.");
		cy.get("#avatarURL-helper-text").should("exist", "This field is required.");
	});
});

import ContactFormUT from "@/components/unitTestComponents/ContactFormUT";
import "@/styles/globals.css";

describe("ContactForm.cy.tsx", () => {
	it("values must appear on input fields", () => {
		cy.mount(<ContactFormUT></ContactFormUT>);

		cy.get('input[name="fullName"]')
			.type("Carmina López Palacios")
			.should("have.value", "Carmina López Palacios");
		cy.get('input[name="country"]')
			.type("Mexico")
			.should("have.value", "Mexico");
		cy.get('input[name="state"]')
			.type("Nuevo Leon")
			.should("have.value", "Nuevo Leon");
		cy.get('input[name="city"]')
			.type("Monterrey")
			.should("have.value", "Monterrey");
		cy.get('input[name="phoneNumber"]')
			.clear()
			.type("1234567890")
			.should("have.value", "1234567890");
		cy.get('input[name="avatarURL"]')
			.type("https://www.url/linkedin")
			.should("have.value", "https://www.url/linkedin");
		cy.get('input[id="submitButton"]').click()
	});
});

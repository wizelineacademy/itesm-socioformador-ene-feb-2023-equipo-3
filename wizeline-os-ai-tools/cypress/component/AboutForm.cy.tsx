
import AboutFormUT from "@/components/unitTestComponents/AboutFormUT";
import "@/styles/globals.css";

describe("AboutForm.cy.tsx", () => {
	it("character counter should count correctly", () => {
		cy.mount(<AboutFormUT></AboutFormUT>);
        cy.get('textarea[id="aboutDescription"]')
            .type("Hey there! I'm a passionate software developer with a knack for turning complex problems into elegant solutions. I thrive in the dynamic and ever-evolving world of technology, constantly seeking to expand my skills and stay up-to-date with the latest trends and innovations.")
            .should("have.value","Hey there! I'm a passionate software developer with a knack for turning complex problems into elegant solutions. I thrive in the dynamic and ever-evolving world of technology, constantly seeking to expand my skills and stay up-to-date with the latest trends and innovations.");
            cy.get('.text-right').should("contain", '274/800')
	});
});
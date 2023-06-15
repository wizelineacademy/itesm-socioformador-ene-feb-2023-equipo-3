import SkillsFormUT from "@/components/unitTestComponents/SkillsFormUT"
import "@/styles/globals.css";

describe('SkillsForm.cy.tsx', () => {
	it('should select an option from the autocomplete list', () => {
		cy.mount(<SkillsFormUT></SkillsFormUT>);

		cy.get('div > [name="expertSkills"]').type("SwiftUI{enter}");
		cy.get('ul[role="listbox"]').should('exist');
		cy.get('li[data-option-index="0"]').click();
		cy.get('div > [name="expertSkills"]').should('contain', 'SwiftUI');

		cy.get('div > [name="advancedSkills"]').type("Apollo{enter}");
		cy.get('ul[role="listbox"]').should('exist');
		cy.get('li[data-option-index="0"]').click();
		cy.get('div > [name="advancedSkills"]').should('contain', 'Apollo');

		cy.get('div > [name="advancedSkills"]').type("Moongose{enter}");
		cy.get('ul[role="listbox"]').should('exist');
		cy.get('li[data-option-index="0"]').click();
		cy.get('div > [name="advancedSkills"]').should('contain', 'Moongose');


		cy.get('div > [name="intermediateSkills"]').click()
		cy.get('ul[role="listbox"]').should('exist');
		cy.get('li[data-option-index="9"]').click();
		cy.get('div > [name="intermediateSkills"]').should('contain', 'CSS in JS');

		cy.get('div > [name="basicSkills"]').type("Sinatra{enter}");
		cy.get('ul[role="listbox"]').should('exist');
		cy.get('li[data-option-index="0"]').click();
		cy.get('div > [name="basicSkills"]').should('contain', 'Sinatra');




	})
})
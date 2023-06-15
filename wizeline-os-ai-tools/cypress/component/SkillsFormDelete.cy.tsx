import SkillsFormUT from "@/components/unitTestComponents/SkillsFormUT"
import "@/styles/globals.css";

describe('SkillsFormDelete.cy.cy.tsx', () => {
	it('should allow deleting a selection using the cancel button', () => {
		cy.mount(<SkillsFormUT></SkillsFormUT>);

		cy.get('div > [name="expertSkills"]').type("SwiftUI{enter}");
		cy.get('ul[role="listbox"]').should('exist');
		cy.get('li[data-option-index="0"]').click();
		cy.get('div > [name="expertSkills"]').should('contain', 'SwiftUI');

        cy.get('[data-tag-index="0"]>[data-testid="CancelIcon"]').click();

		cy.get('div > [name="advancedSkills"]').type("Apollo{enter}");
		cy.get('ul[role="listbox"]').should('exist');
		cy.get('li[data-option-index="0"]').click();
		cy.get('div > [name="advancedSkills"]').should('contain', 'Apollo');

		cy.get('div > [name="advancedSkills"]').type("Moongose{enter}");
		cy.get('ul[role="listbox"]').should('exist');
		cy.get('li[data-option-index="0"]').click();
		cy.get('div > [name="advancedSkills"]').should('contain', 'Moongose');

        cy.get('div > [name="advancedSkills"]').type("PyTest{enter}");
		cy.get('ul[role="listbox"]').should('exist');
		cy.get('li[data-option-index="0"]').click();
		cy.get('div > [name="advancedSkills"]').should('contain', 'PyTest');

        cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-clearIndicator').click();

		cy.get('div > [name="intermediateSkills"]').type("Sinatra{enter}");
		cy.get('ul[role="listbox"]').should('exist');
		cy.get('li[data-option-index="0"]').click();
		cy.get('div > [name="intermediateSkills"]').should('contain', 'Sinatra');

        cy.get('div > [name="intermediateSkills"]').click()
		cy.get('ul[role="listbox"]').should('exist');
		cy.get('li[data-option-index="9"]').click();
		cy.get('div > [name="intermediateSkills"]').should('contain', 'CSS in JS');

        cy.get('[data-tag-index="0"]>[data-testid="CancelIcon"]').click();

        
		cy.get('div > [name="basicSkills"]').type("SwiftUI{enter}");
		cy.get('ul[role="listbox"]').should('exist');
		cy.get('li[data-option-index="0"]').click();
		cy.get('div > [name="basicSkills"]').should('contain', 'SwiftUI');

        cy.get(':nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-clearIndicator').click();
	})
})
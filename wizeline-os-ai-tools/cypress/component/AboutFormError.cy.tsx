
import AboutFormUT from "@/components/unitTestComponents/AboutFormUT";
import "@/styles/globals.css";

describe("AboutFormError.cy.tsx", () => {
	it("on error, textarea must turn red", () => {
		cy.mount(<AboutFormUT></AboutFormUT>);
        cy.get('textarea[id="aboutDescription"]')
            .type("Hey there! I'm a passionate software developer with a knack for turning complex problems into elegant solutions. I thrive in the dynamic and ever-evolving world of technology, constantly seeking to expand my skills and stay up-to-date with the latest trends and innovations.My journey in software development began when I discovered my love for logical thinking and problem-solving during my early years. Since then, I've been on a continuous learning adventure, honing my programming skills and exploring various languages and frameworks. I find joy in the process of translating ideas into functional, user-friendly applications that make a positive impact on people's lives.I thrive in collaborative environments, where I can actively contribute to a team, brainstorm ideas, and work together to deliver exceptional results.")
            .should("have.value","Hey there! I'm a passionate software developer with a knack for turning complex problems into elegant solutions. I thrive in the dynamic and ever-evolving world of technology, constantly seeking to expand my skills and stay up-to-date with the latest trends and innovations.My journey in software development began when I discovered my love for logical thinking and problem-solving during my early years. Since then, I've been on a continuous learning adventure, honing my programming skills and exploring various languages and frameworks. I find joy in the process of translating ideas into functional, user-friendly applications that make a positive impact on people's lives.I thrive in collaborative environments, where I can actively contribute to a team, brainstorm ideas, and work together to deliver exceptional results.");
        cy.get('.text-right').should("contain", '827/800');
        cy.get('textarea[id="aboutDescription"]').should(($textarea) => {
            const paragraphElement = $textarea.next('p');
            const hasPinkTextColor = paragraphElement.hasClass('text-rose-600');
            expect(hasPinkTextColor).to.be.true;
        });
        cy.get('textarea[id="aboutDescription"]').should(($textarea) => {
            const parentDiv = $textarea.parent();
            const hasPinkBorderColor = parentDiv.hasClass('border-rose-400');
            expect(hasPinkBorderColor).to.be.true;
        });
	});
});
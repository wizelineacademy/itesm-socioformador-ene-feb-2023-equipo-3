import Certifications from "@/components/Profile/Certification";

describe("Certification Profile", () => {
    it("should display the certification component with an image ", () => {
        cy.mount(<Certifications />)
        
    })
});
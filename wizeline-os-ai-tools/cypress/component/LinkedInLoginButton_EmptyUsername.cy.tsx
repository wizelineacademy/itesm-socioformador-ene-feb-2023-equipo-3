import { mount } from "cypress/react18";
import LinkedInLoginButton from "@/components/Form/LinkedInLoginButton";

describe('LinkedInLoginButton', () => {
    it('should throw an error when linkedInUsername is empty', () => {
      cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('Please enter a LinkedIn username');
        return false;
      });
  
      mount(
        <LinkedInLoginButton
          text="Get From LinkedIn"
          onLinkedInClick={() => {}}
          linkedInUsername=""
          disabled={false}
        />
      );
  
      cy.get('button').click();
    });
  });
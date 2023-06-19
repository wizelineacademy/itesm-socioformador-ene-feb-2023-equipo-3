import React from 'react';
import LinkedInLoginButton from '@/components/Form/LinkedInLoginButton';
import { mount } from 'cypress/react';

describe('LinkedInLoginButton', () => {
  it('should display "Get From LinkedIn" button', () => {
    mount(<LinkedInLoginButton text="Get From LinkedIn" onLinkedInClick={() => {}} linkedInUsername='jackbravo' disabled={false} />);
    cy.contains('button', 'Get From LinkedIn').should('be.visible');
  });
});

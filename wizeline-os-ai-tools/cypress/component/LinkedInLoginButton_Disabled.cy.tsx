import React from 'react';
import { mount } from 'cypress/react18';
import LinkedInLoginButton from '@/components/Form/LinkedInLoginButton';

describe('LinkedInLoginButton', () => {
  it('should be disabled when disabled prop is true', () => {
    mount(<LinkedInLoginButton text="Get From LinkedIn" onLinkedInClick={() => {}} linkedInUsername='jackbravo' disabled={true} />);
    cy.get('button').should('be.disabled');
  });

  it('should be enabled when disabled prop is false', () => {
    mount(<LinkedInLoginButton text="Get From LinkedIn" onLinkedInClick={() => {}} linkedInUsername='jackbravo' disabled={false} />);
    cy.get('button').should('not.be.disabled');
  });
});

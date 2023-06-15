import React from 'react';
import { mount } from 'cypress/react';
import LinkedInLoginButton from '@/components/Form/LinkedInLoginButton';

describe('LinkedInLoginButton', () => {
  it('should handle error when profile data retrieval fails', () => {
    const onLinkedInClick = cy.stub();
    const linkedInUsername = 'usuarioDesconocido_ejemplo'; // Empty username to trigger error

    mount(<LinkedInLoginButton text="Get From LinkedIn" onLinkedInClick={onLinkedInClick} linkedInUsername={linkedInUsername} disabled={false} />);

    // Intercept console error
    cy.on('window:console', (consoleLog) => {
      // Verify that the error message is logged correctly
      expect(consoleLog.error).to.be.calledWith('Error al obtener los datos del perfil:');
    });

    // Trigger the fetchProfileData function by clicking the button
    cy.get('button').click();
  });
});

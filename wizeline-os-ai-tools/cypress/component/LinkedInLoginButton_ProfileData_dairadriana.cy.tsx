import React from 'react';
import { mount } from 'cypress/react18';
import LinkedInLoginButton from '@/components/Form/LinkedInLoginButton';

describe('LinkedInLoginButton', () => {
  it('should return the expected profileData', () => {
    const expectedProfileData = {
      aiAsistant: '',
      aboutDescription: "",
      fullName: 'Daira Adriana Chavarría Rodríguez',
      title: 'B.S. in Computer Science and Technology Student',
      country: undefined,
      state: undefined,
      city: '',
      phoneNumber: '',
      avatarURL: 'https://media.licdn.com/dms/image/D5603AQEN8NOunohXSg/profile-displayphoto-shrink_800_800/0/1680722219673?e=2147483647&v=beta&t=CnRzX99nA9YK3-l7R1Z_3TXAZPiJK-ZJfkH1EgePY98',
      schoolName: 'Tecnológico de Monterrey',
      degree: 'Bachelor\'s degree in Computer Science and Technology',
      specialization1: undefined,
      specialization2: undefined,
      pastWtitle: 'Estancia \"Sebiotec - IASM: Jóvenes Investigadores\" at Sebiotec Mx',
      pastWStartDate: '',
      pastWEndDate: '',
      pastWDescription: '',
      expertSkills: [],
      advancedSkills: [],
      intermediateSkills: [],
      basicSkills: [],
    };

    // Crea una promesa que se resolverá cuando actualProfileData se defina
    const profileDataPromise = new Promise((resolve) => {
      const onLinkedInClick = (profileData: any) => {
        resolve(profileData);
      };

      mount(<LinkedInLoginButton text="Get From LinkedIn" onLinkedInClick={onLinkedInClick} linkedInUsername="dairadriana" disabled={false} />);
      cy.get('button').click();
    });

    // Espera a que la promesa se resuelva y realiza la aserción
    cy.wrap(profileDataPromise).should('deep.equal', expectedProfileData);
  });
});

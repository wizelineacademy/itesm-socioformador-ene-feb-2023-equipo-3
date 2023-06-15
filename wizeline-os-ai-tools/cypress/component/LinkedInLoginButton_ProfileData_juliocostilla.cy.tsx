import React from 'react';
import { mount } from 'cypress/react18';
import LinkedInLoginButton from '@/components/Form/LinkedInLoginButton';

describe('LinkedInLoginButton', () => {
  it('should return the expected profileData', () => {
    const expectedProfileData = {
      aiAsistant: '',
      aboutDescription: "Acerca de\n      \n            \n        \n        \n\n      \n        \n        Self driven, objective focused and analytical engineer. Challenges are always welcomed!",
      fullName: 'Julio Costilla',
      title: 'DASM, PMP, 6sigma BB',
      country: 'México',
      state: 'Nuevo León',
      city: 'Monterrey',
      phoneNumber: '',
      avatarURL: "https://media.licdn.com/dms/image/C5603AQHQWcys0XwlhQ/profile-displayphoto-shrink_800_800/0/1517530947573?e=2147483647&v=beta&t=NXnFK2WN2G_nNH6vbEblw9BqTUGIbIfTEx1OLS3nzx4",
      schoolName: 'Universidad Autonoma de Nuevo Leon',
      degree: 'Ingeniería de materiales in null',
      specialization1: undefined,
      specialization2: undefined,
      pastWtitle: 'Sr. Project Manager at Wizeline',
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

      mount(<LinkedInLoginButton text="Get From LinkedIn" onLinkedInClick={onLinkedInClick} linkedInUsername="julio-costilla-6120564a" disabled={false} />);
      cy.get('button').click();
    });

    // Espera a que la promesa se resuelva y realiza la aserción
    cy.wrap(profileDataPromise).should('deep.equal', expectedProfileData);
  });
});

import React from 'react';
import { mount } from 'cypress/react18';
import LinkedInLoginButton from '@/components/Form/LinkedInLoginButton';

describe('LinkedInLoginButton', () => {
  it('should return the expected profileData', () => {
    const expectedProfileData = {
      aiAsistant: '',
      aboutDescription: "",
      fullName: 'Elida Lisset Rodríguez García',
      title: 'Computer Science Student at Tecnológico de Monterrey',
      country: "México",
      state: "Nuevo León",
      city: 'Monterrey',
      phoneNumber: '',
      avatarURL: 'https://media.licdn.com/dms/image/C4E03AQGbk3gufnKdHA/profile-displayphoto-shrink_800_800/0/1611123289330?e=2147483647&v=beta&t=aXqdbGFTVpHbpFlV-n7Kk-4K4nijpz197xwtTK_WGcE',
      schoolName: 'Tecnológico de Monterrey',
      degree: 'Ingeniería en Tecnologías Computacionales in null',
      specialization1: undefined,
      specialization2: undefined,
      pastWtitle: 'Iconn Experience Intern at Iconn',
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

      mount(<LinkedInLoginButton text="Get From LinkedIn" onLinkedInClick={onLinkedInClick} linkedInUsername="elida-lisset-rodriguez-garcia" disabled={false} />);
      cy.get('button').click();
    });

    // Espera a que la promesa se resuelva y realiza la aserción
    cy.wrap(profileDataPromise).should('deep.equal', expectedProfileData);
  });
});

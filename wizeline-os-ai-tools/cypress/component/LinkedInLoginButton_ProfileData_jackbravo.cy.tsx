import React from 'react';
import { mount } from 'cypress/react18';
import LinkedInLoginButton from '@/components/Form/LinkedInLoginButton';

describe('LinkedInLoginButton', () => {
  it('should return the expected profileData', () => {
    const expectedProfileData = {
      aiAsistant: '',
      aboutDescription: "Long term goal: I'd like to help grow the local software industry and my community in general.Project leader. Manage software teams, develop schedules, assign tasks and track progress.Application Developer in a wide variety of business applications (Java, PHP, Perl).Linux, Open Source and Free Software enthusiast.Specialties: PHP, Perl, C++, Javascript. MySQL.Linux administration. Open Source and Free Software.PHP Frameworks especially using Symfony or Drupal.",
      fullName: 'Joaquin Bravo Contreras',
      title: 'Senior Engineering Manager, Lead of Innovation',
      country: 'Mexico',
      state: 'Jalisco',
      city: 'Zapopan',
      phoneNumber: '',
      avatarURL: 'https://media.licdn.com/dms/image/C5603AQFOAnGXmP25Hg/profile-displayphoto-shrink_800_800/0/1655249801873?e=2147483647&v=beta&t=EJ0PC6RmSEmTFx9HqEvcZ3r6EN7e4N0DBPvRSgFTFew',
      schoolName: 'Tecnológico de Monterrey',
      degree: 'Finance in Economics',
      specialization1: undefined,
      specialization2: undefined,
      pastWtitle: 'Senior Engineering Manager, Lead of Innovation at Wizeline',
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

      mount(<LinkedInLoginButton text="Get From LinkedIn" onLinkedInClick={onLinkedInClick} linkedInUsername="jackbravo" disabled={false} />);
      cy.get('button').click();
    });

    // Espera a que la promesa se resuelva y realiza la aserción
    cy.wrap(profileDataPromise).should('deep.equal', expectedProfileData);
  });
});

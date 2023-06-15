import React from 'react';
import { mount } from 'cypress/react18';
import LinkedInLoginButton from '@/components/Form/LinkedInLoginButton';

describe('LinkedInLoginButton', () => {
  it('should return the expected profileData', () => {
    const expectedProfileData = {
      aiAsistant: '',
      aboutDescription: "Acerca de\n      \n            \n        \n        \n\n      \n        \n        Currently on my third year of B.S. in Computer Science and Technology at Tec de Monterrey. I'm a 21 y/o Mexican developer with two years of experience on analytics and data science paths.AI and Computer Graphics are my biggest passions. I'm also learning full-stack dev. Always open for new projects!",
      fullName: 'Catalina Fernandez-Mena',
      title: 'CS Engineering Student @ Tec de Monterrey | Data Architect @ Teleperfomance',
      country: 'México',
      state: 'Nuevo León',
      city: 'Monterrey',
      phoneNumber: '',
      avatarURL: "https://media.licdn.com/dms/image/C4E03AQEsFop7bKjPEw/profile-displayphoto-shrink_800_800/0/1623115705928?e=2147483647&v=beta&t=P-cIpMye6NV8BO-Jfjwn959GLY9eTjQrt0_wrvbCq4I",
      schoolName: 'Tecnológico de Monterrey',
      degree: 'B.S. in Computer Science and Technology in null',
      specialization1: undefined,
      specialization2: undefined,
      pastWtitle: 'Data Architect at Teleperformance',
      pastWStartDate: '',
      pastWEndDate: '',
      pastWDescription: 'Continuous Improvement and Business Intelligence Department. Responsible of process automation, machine learning and data governance projects.',
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

      mount(<LinkedInLoginButton text="Get From LinkedIn" onLinkedInClick={onLinkedInClick} linkedInUsername="catalina-fernandez-mena-bb4231197" disabled={false} />);
      cy.get('button').click();
    });

    // Espera a que la promesa se resuelva y realiza la aserción
    cy.wrap(profileDataPromise).should('deep.equal', expectedProfileData);
  });
});

import React from 'react';
import { mount } from 'cypress/react18';
import LinkedInLoginButton from '@/components/Form/LinkedInLoginButton';

describe('LinkedInLoginButton', () => {
  it('should return the expected profileData', () => {
    const expectedProfileData = {
      aiAsistant: '',
      aboutDescription: "Acerca de\n      \n            \n        \n        \n\n      \n        \n        I have a graduate degree in Artificial Intelligence from the Kanazawa Institute of Technology in Japan, as a JICA scholar, and experience in diverse IT fields such as Data Science, Machine Learning, Development, QA, Operations Support, and Infrastructure. I currently have a Data Science course that I teach and manage. I currently work as a Data Engineer at Wizeline, and I also provide training and consultancy services for different companies, universities, and government.I love animals and I have 3 rescued dogs and 2 cats, I love cooking, swimming and sea food :)",
      fullName: 'Hayde Martinez',
      title: 'Head of Data & AI at Wizeline, Founder at De Cero a Ciencia De Datos and Ambassador México at WomenOfAI.org',
      country: undefined,
      state: undefined,
      city: 'México',
      phoneNumber: '',
      avatarURL: 'https://media.licdn.com/dms/image/C5603AQGm6ttBJ7IKrg/profile-displayphoto-shrink_800_800/0/1654716438749?e=2147483647&v=beta&t=6ucGai6koSUw3_UnEEQICFpWX1s9Fp5aPOaHg6mWl9o',
      schoolName: '金沢工業大学',
      degree: 'Estancia Técnica con especialidad en Computación (IOT) in null',
      specialization1: undefined,
      specialization2: undefined,
      pastWtitle: 'Head of Data & AI at Wizeline',
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

      mount(<LinkedInLoginButton text="Get From LinkedIn" onLinkedInClick={onLinkedInClick} linkedInUsername="haydemtzl" disabled={false} />);
      cy.get('button').click();
    });

    // Espera a que la promesa se resuelva y realiza la aserción
    cy.wrap(profileDataPromise).should('deep.equal', expectedProfileData);
  });
});

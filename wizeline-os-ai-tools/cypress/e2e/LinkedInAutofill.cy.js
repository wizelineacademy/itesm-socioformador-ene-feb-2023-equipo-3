// form.spec.js

describe('Formulario con relleno automático de LinkedIn', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/newUser'); // Asegúrate de que la URL sea correcta
  });

  it('rellena automáticamente el formulario desde LinkedIn', () => {
    cy.wait(10000);

    // Haz clic en el botón "Get From LinkedIn"
    cy.contains('Get From LinkedIn').click();

    // Verifica que el formulario se haya llenado correctamente
    cy.get('input[name="fullName"]').should('have.value', 'Joaquin Bravo Contreras');
    cy.get('textarea[name="aboutDescription"]').should('have.value', 'Long term goal: I\'d like to help grow the local software industry and my community in general.Project leader. Manage software teams, develop schedules, assign tasks and track progress.Application Developer in a wide variety of business applications (Java, PHP, Perl).Linux, Open Source and Free Software enthusiast.Specialties: PHP, Perl, C++, Javascript. MySQL.Linux administration. Open Source and Free Software.PHP Frameworks especially using Symfony or Drupal.');
    cy.get('input[name="country"]').should('have.value', 'Mexico');
    cy.get('input[name="state"]').should('have.value', 'Jalisco');
    cy.get('input[name="city"]').should('have.value', 'Zapopan');
    cy.get('input[name="avatarURL"]').should('have.value', 'https://media.licdn.com/dms/image/C5603AQFOAnGXmP25Hg/profile-displayphoto-shrink_800_800/0/1655249801873?e=2147483647&v=beta&t=EJ0PC6RmSEmTFx9HqEvcZ3r6EN7e4N0DBPvRSgFTFew');
    cy.get('input[name="pastWtitle"]').should('have.value', 'Senior Engineering Manager, Lead of Innovation at Wizeline');
    cy.get('input[name="schoolName"]').should('have.value', 'Tecnológico de Monterrey');
    cy.get('input[name="degree"]').should('have.value', 'Finance in Economics');
    cy.get('input[name="phoneNumber"]').should('have.value', '');
    // Verifica otros campos según sea necesario

    cy.wait(50000);
    // Envía el formulario
    cy.get('input[type="submit"]').click();
  });
});

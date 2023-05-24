import FormComponent from "@/components/Form/FormComponent"
import "@/styles/globals.css";

describe('FormComponent.cy.tsx', () => {
  it('playground', () => {
    cy.viewport(1024, 768)

    cy.mount(<FormComponent></FormComponent>)
    cy.get('textarea[name="aboutDescription"]').type("I'm a backend engineer, specializing in server-side development. With expertise in languages like Python, Java, or Node.js, I design, build, and maintain the core logic and functionality that powers web applications and services. I handle data storage, APIs, and system integration to ensure efficient and scalable performance. My responsibilities include optimizing databases, implementing security measures, and collaborating with frontend developers to deliver robust and reliable web solutions. I strive to create efficient, scalable, and secure systems that meet the needs of users and businesses.").should('have.value', "I'm a backend engineer, specializing in server-side development. With expertise in languages like Python, Java, or Node.js, I design, build, and maintain the core logic and functionality that powers web applications and services. I handle data storage, APIs, and system integration to ensure efficient and scalable performance. My responsibilities include optimizing databases, implementing security measures, and collaborating with frontend developers to deliver robust and reliable web solutions. I strive to create efficient, scalable, and secure systems that meet the needs of users and businesses.");

    cy.get('input[name="fullName"]').type('Carmina López Palacios').should('have.value', 'Carmina López Palacios');

    cy.get('input[name="title"]').type('Backend Engineer').should('have.value', 'Backend Engineer');
    cy.get('input[name="country"]').type('Mexico').should('have.value', 'Mexico');
    cy.get('input[name="state"]').type('Nuevo Leon').should('have.value', 'Nuevo Leon');
    cy.get('input[name="city"]').type('Monterrey').should('have.value', 'Monterrey');
    cy.get('input[name="phoneNumber"]').clear().type('1234567890').should('have.value', '1234567890');
    cy.get('input[name="avatarURL"]').type('https://www.url/linkedin').should('have.value', 'https://www.url/linkedin');

    cy.get(':nth-child(6) > :nth-child(2) > .-bg-gray-50').type('Software Engineer').should('have.value', 'Software Engineer');
    cy.get('input[name="startDate"]').type('06/2021').should('have.value', '06/2021');
    cy.get('input[name="endDate"]').type('06/2022').should('have.value', '06/2022');
    cy.get('textarea[name="pastWDescription"]').type("As a software engineer, my role involves developing, testing, and maintaining software applications. I analyze user requirements, design solutions, and write code to create functional software. Debugging and problem-solving are crucial aspects of my work. I collaborate with cross-functional teams, adhere to software development processes, and prioritize code quality. Staying updated with emerging technologies is essential, allowing me to continuously improve software performance.").should('have.value', 'As a software engineer, my role involves developing, testing, and maintaining software applications. I analyze user requirements, design solutions, and write code to create functional software. Debugging and problem-solving are crucial aspects of my work. I collaborate with cross-functional teams, adhere to software development processes, and prioritize code quality. Staying updated with emerging technologies is essential, allowing me to continuously improve software performance.');

    cy.get('input[name="schoolName"]').type('Tecnológico de Monterrey').should('have.value', 'Tecnológico de Monterrey');
    cy.get('input[name="degree"]').type('Computer Science').should('have.value', 'Computer Science');

    cy.get(':nth-child(2) > .react-select-container > .react-select__control').type('Helm')
    cy.get('.react-select__menu-list').click()
    cy.get(':nth-child(2) > .react-select-container > .react-select__control').type('MVVM')
    cy.get('.react-select__menu-list').click()
    cy.get(':nth-child(2) > .react-select-container > .react-select__control > .react-select__value-container').children().should('have.length', 3)
    
    //cy.get(':nth-child(2) > .react-select-container > .react-select__control > .react-select__value-container').should('have.value', 'Helm')

    cy.get(':nth-child(3) > .react-select-container > .react-select__control').type('Helm')
    cy.get('.react-select__menu-list').click()
    cy.get(':nth-child(3) > .react-select-container > .react-select__control > .react-select__value-container').children().should('have.length', 2)




  })
})


//cy.get(':nth-child(1) > .react-select__multi-value__label')
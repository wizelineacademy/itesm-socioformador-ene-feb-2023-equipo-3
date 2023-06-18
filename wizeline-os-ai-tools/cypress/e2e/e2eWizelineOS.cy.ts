describe('Wizeline OS E2E testing', () => {
    it('the software should show all the functionalities', () => {
        cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER2'))
        cy.visit('localhost:3000/')
        cy.visit('localhost:3000/newUser')
        cy.get('#next0modal').click()
        cy.get('#next1modal').click()
        cy.get('#next2modal').click()
        cy.get('#question1').type('I have worked 6 years as a IOS Mobile Developer')
        cy.get('#next3modal').click()
        cy.get('#question2').type('I have primarily worked in the technology consulting industry.')
        cy.get('#next4modal').click()
        cy.get('#question3').type('I have experience leading teams of 5-10 people when I was working as a Project Manager.')
        cy.get('#next5modal').click()
        cy.get('#question4').type('Proficient in iOS app development with strong problem-solving skills, attention to detail, effective team collaboration, excellent communication, adaptability, and a passion for staying updated with industry trends.')
        cy.get('#next6modal').click()
        cy.get('#question5').type('My career orientation is focused on leveraging my expertise in iOS app development, problem-solving skills, and collaborative abilities to contribute to innovative projects and continuously grow in the dynamic tech industry.')
        cy.get('#next7modal').click()
        cy.wait(10000)
        cy.get('#finishmodal').click()
        cy.get('#fullName').type('John Doe')
        cy.get('#country').type('Mexico')
        cy.get('#state').type('Tamaulipas')
        cy.get('#city').type('Tampico')
        cy.get('#phoneNumber').type('8331234567')
        cy.get('#avatarURL').type('https://i.pinimg.com/750x/ca/05/70/ca0570a9544212e5475dfdd5bda08502.jpg')
        cy.get('#pastWtitle').type('Project Manager')
        // Select the DatePicker input field
        cy.get('input').then(inputs => {
            // Iterate over each input and perform assertions or actions
            inputs.each((index, input) => {
                if (index === 9) {
                    cy.wrap(input).type('2017-10-05')
                }
                if (index === 10) {
                    cy.wrap(input).type('2021-05-10')
                }

            });
        })
        cy.get('#pastWDescription').type('I was in charge of the development of a mobile app for a client in the retail industry. I was responsible for the planning, execution, and delivery of the project. I was also in charge of the team of 5 developers and 2 designers.')
        cy.get('#schoolName').type('Tecnológico de Monterrey')
        cy.get('#degree').type('Bachelor of Science in Computer Science')
        cy.get('#specialization1').type('AI')
        cy.get('#specialization2').type('Mobile Development')

        cy.get('input').then(inputs => {
            // Iterate over each input and perform assertions or actions
            inputs.each((index, input) => {
                if (index === 15) {
                    cy.wrap(input).type('ARKit')
                    cy.get('li').then(inputs => {
                        // Iterate over each input and perform assertions or actions
                        inputs.each((index, input) => {
                            if (index === 1) {
                                cy.wrap(input).click()
                            }
                        })
                    })
                }
                if (index === 16) {
                    cy.wrap(input).type('Swift')
                    cy.get('li').then(inputs => {
                        // Iterate over each input and perform assertions or actions
                        inputs.each((index, input) => {
                            if (index === 4) {
                                cy.wrap(input).click()
                            }
                        })
                    })
                    cy.wrap(input).type('Swift')
                    cy.get('li').then(inputs => {
                        // Iterate over each input and perform assertions or actions
                        inputs.each((index, input) => {
                            if (index === 0) {
                                cy.wrap(input).click()
                            }
                        })
                    })
                    cy.wrap(input).type('Xcode')
                    cy.get('li').then(inputs => {
                        // Iterate over each input and perform assertions or actions
                        inputs.each((index, input) => {
                            if (index === 1) {
                                cy.wrap(input).click()
                            }
                        })
                    })

                }
                if (index === 17) {
                    cy.wrap(input).type('UI')
                    cy.get('li').then(inputs => {
                        // Iterate over each input and perform assertions or actions
                        inputs.each((index, input) => {
                            if (index === 0) {
                                cy.wrap(input).click()
                            }
                        })
                    })
                }
                if (index === 18) {
                    cy.wrap(input).type('python')
                    cy.get('li').then(inputs => {
                        // Iterate over each input and perform assertions or actions
                        inputs.each((index, input) => {
                            if (index === 0) {
                                cy.wrap(input).click()
                            }
                        })
                    })
                }
            });
        })

        cy.get('#submitButton').click()
        cy.wait(10000)
    })
})


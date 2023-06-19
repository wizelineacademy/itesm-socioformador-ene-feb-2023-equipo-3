describe('E2E: Profile Manual Flow ', () => {
    it('Tests the manual profile form flow works', () => {
      cy.setCookie('next-auth.session-token', Cypress.env('NEXT_AUTH_SESSION_TOKEN_USER2'))
      cy.visit('localhost:3000/newUser')
      cy.get('#next0modal').click()
      cy.get('#createManually').click()
      cy.get('#aboutDescription').type('This is an about me!')
      cy.get('#fullName').type('Cristina Hernandez')
      cy.get('#country').type('Mexico')
      cy.get('#state').type('Nuevo Leon')
      cy.get('#city').type('Monterrey')
      cy.get('#phoneNumber').type('1234567890')
      cy.get('#avatarURL').type('https://media.licdn.com/dms/image/C5603AQE8WVqfXciISA/profile-displayphoto-shrink_800_800/0/1663597148090?e=2147483647&v=beta&t=J2PjcS_A_frTytiBxMXJKzxFMo7cy8PSJ0oj2NKjeME')
      cy.get('#pastWtitle').type('Junior Project Manager')
      // Select the DatePicker input field
      cy.get('input').then(inputs => {
        // Iterate over each input and perform assertions or actions
        inputs.each((index, input) => {
          if (index === 9) {
            cy.wrap(input).type('2022-07-18')
          }
          if (index === 10) {
            cy.wrap(input).type('2023-01-16')
          }
        });
      })
      cy.get('#pastWDescription').type('Collaborated with team of 4 project managers by documenting progress of cybersecurity services proofs of concept and tracking current client monitoring requests.Designing, developing, and managing of intranet department webpage to improve productivity and organization of employees.')
      cy.get('#schoolName').type('Tecnológico de Monterrey')
      cy.get('#degree').type('Bachelor of Science in Computer Science')
      cy.get('#specialization1').type('Cybersecurity')
      cy.get('#specialization2').type('Web Development')

      cy.get('input').then(inputs => {
        // Iterate over each input and perform assertions or actions
        inputs.each((index, input) => {
          if (index === 15) {
            cy.wrap(input).type('HTML')
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
          cy.wrap(input).type('Javascript')
          cy.get('li').then(inputs => {
            // Iterate over each input and perform assertions or actions
            inputs.each((index, input) => {
              if (index === 4) {
                cy.wrap(input).click()
              }
            })
          })
          cy.wrap(input).type('UI Design')
          cy.get('li').then(inputs => {
            // Iterate over each input and perform assertions or actions
            inputs.each((index, input) => {
              if (index === 0) {
                cy.wrap(input).click()
              }
            })
          })
          cy.wrap(input).type('Gitlab')
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
          cy.wrap(input).type('Agile Development')
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

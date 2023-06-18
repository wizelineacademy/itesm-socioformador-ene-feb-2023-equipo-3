import About from '../../src/components/Profile/About'

describe('About Profile', () => {
  it('should display the about component with description ', () => {
    const description = 'Eduardo is an experienced software developer with strong skills in a variety of programming languages and a solid understanding of software architecture. Their commitment to producing high-quality work and collaborating effectively with their team is unwavering.'
    const about = {description: description}
    cy.mount(<About props = {about}/>)
    cy.contains(description)
  })
})
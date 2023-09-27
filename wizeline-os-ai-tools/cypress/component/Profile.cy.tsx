import React from 'react'
import About from '../../src/components/Profile/About'
import GeneralInfo from '../../src/components/Profile/GeneralInfo'
import PastWork from '../../src/components/Profile/PastWork'
import Skill from '../../src/components/Profile/Skill'
import Education from '../../src/components/Profile/Education'
import Certifications from '@/components/Profile/Certification'

describe('<About />', () => {
  it('should display the about with description ', () => {
    const description = 'Carmina López Palacios is a Full Stack Developer with experience in web and mobile app development. She has worked on various projects as a Web Developer, Software Engineer Intern, Backend Developer, Mobile App Developer, Full Stack Developer, and DevOps Engineer. She is skilled in building front-end UI using Angular and React, designing and implementing back-end API using Node.js, Python, and Flask, and integrating mobile apps with existing APIs. Carmina is also certified in AWS and Jenkins. Her excellent problem-solving skills and attention to detail make her a valuable asset to any team.'
    const about = {description: description}
    cy.mount(<About props = {about}/>)
    cy.contains(description)
  })
})

describe('<GeneralInfo />', () => {
  it('should display the General Info', () => {
    const GeneralInfoData = {state:"Oaxaca",city:"Oaxaca",country:"México",rol:{name:"Junior"}}
    const userInfo = {name:"Carmina López Palacios",image:"https://i.pinimg.com/750x/ce/ac/6e/ceac6e5797b34880e204426ffa1a4312.jpg"}
    cy.mount(<GeneralInfo propsContact={GeneralInfoData} propsUser={userInfo}/>)
    cy.contains("Carmina López Palacios")
  })
})

describe('<PastWork />', () => {
  it('should display the Past Work info', () => {
    const pastworks = [{id_job:31, title:"Backend Developer", description:"As a Backend Developer, I was responsible for developing and maintaining the server-side logic for a web application. My main focus was on building RESTful APIs using Python and Flask. I also worked on database design and optimization using PostgreSQL.",start_date:"2023-06-14T06:00:00.000Z",finish_date:"2023-06-27T06:00:00.000Z"}]
    cy.mount(<PastWork props={pastworks}/>)
    cy.contains(pastworks[0].title)
  })
})

describe('<Skill />', () => {
  it('should display the skills', () => {
    const skills = [{id_skills:42,name:"CSS Frameworks",id_level:1},{id_skills:43,name:"Helm",id_level:2},{id_skills:44,name:"Helm",id_level:3}]
    cy.mount(<Skill props={skills}/>)
    cy.contains(skills[0].name)
  })
})

describe('<Education />', () => {
  it('should display the education info', () => {
    const education= [{id_education:14,id_employee:"clitzj38900001d2pi20w5jks",schoolName:"Tecnológico de Monterrey",degree:"Bachelor's Degree",specialization_1:"Computer Science",specialization_2:null}]
    cy.mount(<Education props={education}/>)
    cy.contains(education[0].schoolName)
  })
})

describe('<Certification />', () => {
  it('should display the certification info', () => {
    const certifications = [{image_url : "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"}]
    cy.mount(<Certifications props={certifications}/>)
    cy.contains("Certifications")
  })
})

describe('<Skill />', () => {
  it('should display \'No skills added yet\' from component skills', () => {
    const skills = []
    cy.mount(<Skill props={skills}/>)
    cy.contains("Skill")
  })
})

describe('<Skill />', () => {
  it('should display \'No certifications added yet\' from component skills', () => {
    const certification = []
    cy.mount(<Certifications props={certification}/>)
    cy.contains("Certification")
  })
})
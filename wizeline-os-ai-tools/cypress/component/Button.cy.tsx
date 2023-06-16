import React from 'react'
import SignInButton from '../../src/components/SignInButton'

describe('<SignInButton />', () => {
  it('renders', () => {
    cy.mount(<SignInButton />)
    cy.contains('Continue with Google').click()    
  })
})


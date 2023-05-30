import React from 'react'
import SignInButton from './SignInButton'

describe('<SignInButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SignInButton />)
  })
})
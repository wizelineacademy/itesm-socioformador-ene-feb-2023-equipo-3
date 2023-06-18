import AddButton from '@/components/ui/AddButton'
import React from 'react'
import SignInButton from '../../src/components/SignInButton'

describe('AddButton', () => {
  it('should click the add button', () => {
    cy.mount(<AddButton />);
    cy.get('button').click();
  });
});

describe('<SignInButton />', () => {
  it('should work the button sig in with Google when clicked', () => {
    cy.mount(<SignInButton />)
    cy.contains('Continue with Google').click()    
  })
})


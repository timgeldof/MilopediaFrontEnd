import { createYield } from 'typescript';

describe('Login Page', () => {
  it('login with correct password', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('[data-cy=login-email]').type('tim.geldof@outlook.com');
    cy.get('[data-cy=login-password]').type('P@ssword1');
    cy.get('[data-cy=login-button').click();
    cy.contains('tim.geldof@outlook.be');
    cy.get('[data-cy=exercise]').should('be.visible');
  });
  it('login with faulty password should not show my exercises', () => {
    cy.visit('http://localhost:4200/login');    
    cy.get('[data-cy=login-email]').type('tim.geldof@outlook.com');
    cy.get('[data-cy=login-password]').type('Not the right password');
    cy.get('[data-cy=login-button').click();
    cy.contains('My Exercises').should('be.empty');
    
  });
});
/// <reference types="cypress" />

describe('exercise testing', function () {
    it('Gets all exercises', function () {
      cy.server();
  
      cy.route({
        method: 'GET',
        url: '/',
        status: 200,
        response: 'fixture:exercises.json'
      });
  
      cy.request('http://localhost:4200/')
      .then((response)=>{
          expect(response.body).to.have.length(3);
      });
    });
  
  });
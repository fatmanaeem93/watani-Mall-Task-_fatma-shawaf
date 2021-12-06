/// <reference types="cypress" />

describe('add and delete monitor product', () => {
    let product_name=""
    beforeEach(() => {
        // Preserve cookie in every test
        Cypress.Cookies.defaults({
          preserve: (cookie) => {
            return true;
          }
        })
       
      });
    
        before(() => {
          cy.visit('/')
        })
     
})
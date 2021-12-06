/// <reference types="cypress" />

describe('add and delete monitor product', () => {
    let product_name = ""
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
    context('Filltering Monitor Product with type asus', () => {
        it('Verify clicking on all category tab', () => {
            //  cy.get("#nav a[href='https://watanimall.com/all-categories']").trigger("mouseover").should("have.class","hover")
            cy.get("#nav a[href='https://watanimall.com/all-categories']").click()
            cy.url().should("contain", "/all-categories")
        });
        it('Verify clicking on Menitor Section', () => {
            cy.get("#main a[href='https://watanimall.com/product-category/monitors']").click()
            cy.url().should("contain", "/product-category/monitors")
        });
        it('Verify clicking on asus from manufacturer menu', () => {
            cy.get('[data-value="asus"]').click()
            cy.url().should("contain", "https://watanimall.com/product-category/monitors?_manufacturer=asus")
        });
    })
})
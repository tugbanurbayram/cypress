// <reference types= 'cypress'/>

import Project03Page from "../../pages/Project03Page";

describe("Testing Front End Project", () => {

    beforeEach('', () => {
        cy.visit("https://www.techglobal-training.com/frontend/project-3");
    })


    const project03Page = new Project03Page()

       /**
* Navigate to https://techglobal-training.com/frontend/project-3
Click on the “Round trip” radio button and validate it is selected
Validate that the “One way” radio button is not selected
Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed
Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed
Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled
    */

    it("Test Case 01 - Validate the default Book your trip form", () => {

        project03Page.getTripTypeRadioButtonsByLabel('One way')
        .should('be.visible')
        .and('be.enabled')
        .and('be.checked')

        project03Page.getTripTypeRadioButtonsByLabel('Round trip')
        .should('be.visible')
        .and('be.enabled')
        .and('not.be.checked')

        project03Page.getAllLabels().each(($el) => {
            cy.wrap($el).should('be.visible')
        })

        project03Page.getAllDropdowns().each(($el) => {
            cy.wrap($el).should('be.visible')
        })
        

        project03Page.gettAllDatePickers().each(($el) => {
            cy.wrap($el).should('be.visible')
        })

        project03Page.gettAllDatePickers().last().should('be.disabled')

        project03Page.getDropdownByLabel('Number of passengers')
        .should('have.value', '1')

        project03Page.getDropdownByLabel('Passenger 1')
        .should('have.value', 'Adult (16-64)')

        project03Page.getBookButton().should('be.visible').and('be.enabled')
    })

/**
 * Navigate to https://techglobal-training.com/frontend/project-3
Click on the “Round trip” radio button and validate it is selected
Validate that the “One way” radio button is not selected
Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed
Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed
Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled
 */
    it("Test Case 02 - Validate the Book your trip form when Round trip is selected", () => {
 
        project03Page.getTripTypeRadioButtonsByLabel('Round trip')
        .check()
        .should('be.visible')
        .and('not.be.checked')

        project03Page.getTripTypeRadioButtonsByLabel('One way')
        .should('be.visible')
        .and('not.be.checked')

        project03Page.getAllLabels().each(($el) => {
            cy.wrap($el).should('be.visible')
        })

        project03Page.getAllDropdowns().each(($el) => {
            cy.wrap($el).should('be.visible')
        })

        project03Page.gettAllDatePickers().each(($el) => {
            cy.wrap($el).should('be.visible')
        })

        project03Page.getDropdownByLabel('Number of passengers')
        .should('have.value', '1')

        project03Page.getDropdownByLabel('Passenger 1')
        .should('have.value', 'Adult (16-64)')

        project03Page.getBookButton().should('be.visible').and('be.enabled')

    } )
})
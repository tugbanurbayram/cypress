class Project03Page {

    getAllLabels() {
        return cy.get('.field > label')
    }

    getTripTypeRadioButtonsByLabel(label) {
        return cy.contains('.radio', label).find('input')  //.radio > input
    }

    getAllDropdowns() {
        return cy.get('.select > select')
    }   //all dropdowns one by one together

    getDropdownByLabel(label) {
        return cy.contains(label).parent().find('select') //each dropdown by label
    } 

    gettAllDatePickers() {
        return cy.get('[class*="react"] > div > input')
    }

    getDatePickerByLabel(label) {
        return cy.contains(label).parent().find('input')
    }

    getBookButton() {
        return cy.get('button') 
    }
}

export default Project03Page;
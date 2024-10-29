/// <reference types= 'cypress'/>

describe("Testing Front End Project", () => {

    beforeEach('', () => {
        cy.visit("https://techglobal-training.com/frontend/project-1");
    })


    it("1- Validate the Contact Us information", () => {

        cy.get('.is-size-3').should('have.text', "Contact Us")

        cy.get('#address').should('have.text', "2800 S River Rd Suite 310, Des Plaines, IL 60018")

        cy.get('#email').should('have.text', 'info@techglobalschool.com')

        cy.get('#phone-number').should('have.text', '(224) 580-2150')

    })

    it("2- Validate the Full name input box", () => {

        cy.get('[placeholder="Enter your full name"]').should('be.visible')

        cy.get('[placeholder="Enter your full name"]').should('have.attr', 'required')
        
        cy.get(".field > [for= 'name']").should('have.text', 'Full name *')

        cy.get('[placeholder="Enter your full name"]').should('have.attr', 'placeholder', 'Enter your full name')
        
    })

    it('3- Validate the Gender radio button', () => {

        cy.get('.control > label').first().should('have.text', 'Gender *')
        cy.get('.mr-1').should('have.attr', 'required')
    
        
        const options = ["Male", "Female", "Prefer not to disclose"];
    
        cy.get(".radio").each(($el, index) => {
          cy.wrap($el)   
        .should("have.text",options[index] )
        
        });
    
    
        cy.get('[type="radio"]').each(($ele, index) => {
          cy.wrap($ele)   
        .should('be.enabled', options[index] )
        .should('not.be.checked', options[index] )
        
        });
    
        cy.get('[type="radio"]').first().click()
        cy.get('[type="radio"]').first().should('be.checked')
        cy.get('[type="radio"]').eq(1).should('not.be.checked')
        cy.get('[type="radio"]').eq(2).should('not.be.checked')
    
        
        cy.get('[type="radio"]').eq(1).check()
        cy.get('[type="radio"]').eq(1).should('be.checked')
        cy.get('[type="radio"]').first().should('not.be.checked')
        cy.get('[type="radio"]').last().should('not.be.checked')
    
    
      })


    it('4- Validate the Address input box', () => {

        cy.get('[placeholder="Enter your address"]').should('be.visible')
        
        cy.get('[placeholder="Enter your address"]').should('not.have.attr', 'required')
     
        cy.get('.label').eq(2).should('have.text', 'Address')
        
        cy.get('[placeholder="Enter your address"]').should('have.attr', 'placeholder', 'Enter your address')   
    })


    it('5- Validate the Email input box', () => {
        cy.get('[placeholder="Enter your email"]').should('be.visible')
           
        cy.get('[placeholder="Enter your email"]').should('have.attr', 'required')
           
        cy.get('.label').eq(3).should('have.text', 'Email *')
        
        cy.get('[placeholder="Enter your email"]').should('have.attr', 'placeholder', 'Enter your email')
          })

    it('6- Validate the Phone input box', () => {
   
        cy.get('[placeholder="Enter your phone number"]').should('be.visible')
            
        cy.get('[placeholder="Enter your phone number"]').should('not.have.attr', 'required')
            
        cy.get('.label').eq(4).should('have.text', 'Phone')
            
        cy.get('[placeholder="Enter your phone number"]').should('have.attr', 'placeholder', 'Enter your phone number')
            
    
    })


    it('7- Validate the Message text area', () => {
        
        cy.get('.textarea').should('be.visible')
        
        cy.get('.textarea').should('not.have.attr', 'required')
            
        cy.get('.label').last().should('have.text', 'Message')
            
        cy.get('.textarea').should('have.attr', 'placeholder', 'Type your message here...')       
    })





    it('8- Validate the Consent checkbox', () => {
            
        cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.')
    
        cy.get('[type="checkbox"]').should('have.attr', 'required')
    
        cy.get('[type="checkbox"]').should('be.enabled')
            
        cy.get('[type="checkbox"]').check().should('be.checked')

        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')
        
        
    })

    it("9- Validate the SUBMIT button", () => {
        cy.get('.control > .button').should('be.visible')
        .and('be.enabled')
        .and('have.text', 'SUBMIT')
    })

   
    it('10-  Validate the form submission' , () => {
   
        cy.get('.input').first().type('NUR')
        
        cy.get('[type="radio"]').first().click()
       
        cy.get('[placeholder="Enter your address"]').type('2223 w washington blvd')
        
        cy.get('[placeholder="Enter your email"]').type('abc@gmail.com')
       
        cy.get('[placeholder="Enter your phone number"]').type('4108333244')
   
        cy.get('.textarea').type('I LOVE TECHGLOBAL')
      
        cy.get('[type="checkbox"]').click()
       
        cy.get('[type="submit"]').click()
        
        cy.get('.mt-5').should('have.text', 'Thanks for submitting!')
    
    })
})
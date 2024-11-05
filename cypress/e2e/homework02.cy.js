/// <reference types= 'cypress'/>

describe("Testing Front End Project", () => {

    beforeEach('', () => {
        cy.visit("https://www.techglobal-training.com/frontend/project-2");
    })

    it("Test Case 01 - Validate the login form", () => {

        /**
         * Navigate to https://techglobal-training.com/frontend/project-2
        -Validate that the username input box is displayed
        *Validate that the username input box is not required
        +Validate that the label of the username input box is “Please enter your username”
        *Validate that the password input box is displayed
        -Validate that the password input box is not required
        +Validate that the label of the password input box is “Please enter your password”
        &Validate the “LOGIN” button is displayed
        &Validate the “LOGIN” button is clickable
        %Validate that the button text is “LOGIN”
        Validate the “Forgot Password?” link is displayed
        Validate that the “Forgot Password?” link is clickable
        Validate that the link text is “Forgot Password?”
         */

        cy.get("div > input").each(($el) => {
            cy.wrap($el).should('be.visible')
            cy.wrap($el).should('not.have.attr', 'required')
        })


        const expectedLabel = ['Please enter your username', 'Please enter your password']
        cy.get('div > label').each(($txt, index) => {
            expect($txt.text()).to.equal(expectedLabel[index])    //explicit assertion

        })

        cy.get("#login_btn").should('be.visible')
        cy.get("#login_btn").should('be.enabled')
        cy.get("#login_btn").should('have.text', 'LOGIN')

        cy.get('#login_btn').next().should('be.visible')
        cy.get('#login_btn').next().should('have.text', 'Forgot Password?')
    })


    it("Test Case 02 - Validate the valid login", () => {

        /**
        * Navigate to https://techglobal-training.com/frontend/project-2
        Enter the username as “TechGlobal”
        Enter the password as “Test1234”
        Click on the “LOGIN” button
        Validate the success message is displayed as “You are logged in”
        Validate the logout button displayed with the text “LOGOUT” 
        */

        const input = ['TechGlobal', 'Test1234']

        cy.get("div > input").first().type(input[0])
        cy.get("div > input").last().type(input[1])

        cy.get("#login_btn").click()

        cy.get('#success_lgn').should('have.text', 'You are logged in')

        cy.get('#logout').should('have.text', 'LOGOUT')
    })


    it("Test Case 03 - Validate the logout", () => {

        /**
         * Navigate to https://techglobal-training.com/frontend/project-2
        Enter the username as “TechGlobal”
        Enter the password as “Test1234”
        Click on the “LOGIN” button
        Click on the “LOGOUT” button
        Validate that the login form is displayed
         */

        const input = ['TechGlobal', 'Test1234']

        cy.get("div > input").first().type(input[0])
        cy.get("div > input").last().type(input[1])

        cy.get("#login_btn").click()
        cy.get('#logout').click()

        cy.get('[class="LoginForm_form__m12Jc"]').should('be.visible')
    })

    it("Test Case 04 - Validate the Forgot Password? Link and Reset Password modal", () => {

        /**
         * Navigate to https://techglobal-training.com/frontend/project-2
        Click on the “Forgot Password?” link
        Validate that the modal heading “Reset Password” is displayed
        Validate that the close button is displayed
        Validate that the email input box is displayed
        Validate that the label of the email input box is “Enter your email address and we'll send you a link to reset your password.”
        Validate the “SUBMIT” button is displayed
        Validate the “SUBMIT” button is clickable
        Validate that the button text is “SUBMIT”
         */
        
        cy.get('#login_btn').next().click()

        cy.get('#modal_title').should('have.text', 'Reset Password')

        cy.get('.delete').should('be.visible')

        cy.get('#email').should('be.visible')

        cy.get('[for="email"]').should('be.visible')

        cy.get('#submit').should('be.visible')
        cy.get('#submit').should('be.enabled')
        cy.get('#submit').should('have.text', 'SUBMIT')

    })

    it("Test Case 05 - Validate the Reset Password modal close button", () => {

        /*
        Navigate to https://techglobal-training.com/frontend/project-2
        Click on the “Forgot Password?” link
        Validate that the “Reset Password” modal is displayed
        Click on the close button
        Validate that the “Reset Password” modal is closed
        */

        cy.get('#login_btn').next().click()

        cy.get('.modal-card').should('be.visible')

        cy.get('.delete').click()

        cy.get('.modal-card').should('not.exist')
    })

    it("Test Case 06 - Validate the Reset Password form submission", () => {
        /**
         * Navigate to https://techglobal-training.com/frontend/project-2
        Click on the “Forgot Password?” link
        Enter an email
        Click on the “SUBMIT” button
        Validate the form message “A link to reset your password has been sent to your email address.” is displayed under the “SUBMIT” button
         */

        cy.get('#login_btn').next().click()

        cy.get('#email').type('tugbanurbayram@gmail.com')

        cy.get('#submit').click()

        cy.get('#confirmation_message').should('have.text', 'A link to reset your password has been sent to your email address.')
    })
    
    it("Test Case 07 - Validate the invalid login with the empty credentials", () => {
        /*
        Navigate to https://techglobal-training.com/frontend/project-2
        Leave username empty
        Leave password empty
        Click on the “LOGIN” button
        Validate the failure message is displayed as “Invalid Username entered!” above the form 
        */

        cy.get('#username').type(" ")
        cy.get('#password').type(" ")
        cy.get('#login_btn').click()
        cy.get('#error_message').should('have.text', "Invalid Username entered!")

    })

    it("Test Case 08 - Validate the invalid login with the wrong username", () => {
        /**
         * Navigate to https://techglobal-training.com/frontend/project-2
        Enter the username as “John”
        Enter the password as “Test1234”
        Click on the “LOGIN” button
        Validate the failure message is displayed as “Invalid Username entered!” above the form
         */
        
        cy.get('#username').type("John")
        cy.get('#password').type("Test1234")
        cy.get('#login_btn').click()
        cy.get('#error_message').should('have.text', "Invalid Username entered!")

    })

    it("Test Case 09 - Validate the invalid login with the wrong password", () => {
        /**
         * Navigate to https://techglobal-training.com/frontend/project-2
        Enter the username as “TechGlobal”
        Enter the password as “1234”
        Click on the “LOGIN” button
        Validate the failure message is displayed as “Invalid Password entered!” above the form
         */
        cy.get('#username').type("TechGlobal")
        cy.get('#password').type("Test1234")
        cy.get('#login_btn').click()
        cy.get('#error_message').should('have.text', "Invalid Username entered!")

    })

    it("Test Case 10 - Validate the invalid login with the wrong username and password", () => {
        /*
        Navigate to https://techglobal-training.com/frontend/project-2
        Enter the username as “John”
        Enter the password as “1234”
        Click on the “LOGIN” button
        Validate the failure message is displayed as “Invalid Username entered!” above the form
        */
        cy.get('#username').type("John")
        cy.get('#password').type("1234")
        cy.get('#login_btn').click()
        cy.get('#error_message').should('have.text', "Invalid Username entered!")


    })

})

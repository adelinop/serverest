import BasePage from "../basePage";

const selectors = {
	create_button: '[data-testid=cadastrar]',
    name: '[data-testid=nome]',
    email: '[data-testid=email]',
    password: '[data-testid=password]',
    confirmation_alert: '[class="alert alert-dismissible alert-primary"]',
    admin_checkbox: '[id=administrador]',
    error_alert:'[class="alert alert-secondary alert-dismissible"]'
}

class createAccountPage extends BasePage {	
    /**
     * This method verify if the Create Account Page loaded properly
     */
    verifyIfCreateAccountPageLoaded(){
        cy.get(selectors.create_button).should('be.visible')
    }

    /**
     * This method will fill the account fields and click on create account button
     * @param {*} name 
     * @param {*} email 
     * @param {*} password 
     */
    createAccount(message, type){
        cy.fixture('example').as('user')
        cy.get('@user').then(user =>{
        cy.get(selectors.name).type(user.name)
        if(message=='confirmation'){
            cy.get(selectors.email).type(Math.random().toString(36).slice(2, 7)+user.email)
        }else if(message=='error'){
            cy.get(selectors.email).type(user.email)
        }
        cy.get(selectors.password).type(user.password)
        })
       if(type == 'admin'){
        cy.get(selectors.admin_checkbox).click()
       }
        cy.get(selectors.create_button).click()
    }

    /**
     * This method will check if the alert of account creation is appearing after click on create button
     */
    verifyIfAccountCreated(confirm){
        if(confirm=="confirmation"){
            expect(cy.get(selectors.confirmation_alert)).to.exist
        }else if(confirm=="error"){
            expect(cy.get(selectors.error_alert)).to.exist
        }
    }
}
export default createAccountPage
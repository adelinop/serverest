import BasePage from "../basePage";

const selectors = {
	email: '[data-testid=email]',
    password: '[data-testid=senha]',
    create_account: '[data-testid=cadastrar]',
    login_button: '[data-testid=entrar]'
}

class LoginPage extends BasePage {	
    /**
     * this method will get the credentials in the example fixtures and fill the fields 
     * @param {*} user 
     * @param {*} password 
     * 
     * 
     */
    fillCredentials(typeUser){
        cy.fixture('example').as('user')
        cy.get('@user').then(user =>{
            cy.log(user.adminUser.email)
            if(typeUser == 'admin'){
                cy.get(selectors.email).type(user.adminUser.email)
                cy.get(selectors.password).type(user.adminUser.password)
            }else{
                cy.get(selectors.email).type(user.email)
                cy.get(selectors.password).type(user.password)
            }
        })
        cy.get(selectors.login_button).click()
    }
    /**
    * This method access the Create Account session
    */
    accessCreateAccount(){
        cy.get(selectors.create_account).click()
    }
}
export default LoginPage
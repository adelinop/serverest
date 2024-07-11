import BasePage from "../basePage";

const selectors = {
    header:'[id=navbarTogglerDemo01]',
    list_of_users:'[data-testid=listar-usuarios]'
}

class HomePage extends BasePage {	

    /**
     * This methor will check if the page Home is loaded properly
     */
    verifyIfHomePageLoad(){
        cy.get(selectors.header).should('be.visible')
    }

    accessListOfUsers(){
        cy.get(selectors.list_of_users).click()
    }
 
}
export default HomePage
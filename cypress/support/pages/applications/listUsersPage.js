import BasePage from "../basePage";

const selectors = {
    list_of_users: '[class="table table-striped"]'
}

class ListUsersPage extends BasePage {	
    verifyListOfUsers(){
        cy.get(selectors.list_of_users).then($elem =>{
            expect($elem).to.exist
        })
        
    }
 
}
export default ListUsersPage
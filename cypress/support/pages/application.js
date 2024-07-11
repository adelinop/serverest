// ------------------------------------------------------------- Components -------------------------------------------------------//

// ----------------------------------------------------------------Pages -----------------------------------------------------------//
import LoginPage from './applications/loginPage'
import CreateAccountPage from './applications/createAccountPage'
import HomePage from './applications/homePage'
import ListUsersPage from './applications/listUsersPage'
/**
 * This is the main class the encapsulates all pages regarding the application (Except base pages since they are not meant to be directly called).
 *
 * Because of this class, you don't need to import and create objects to all the pages, so you can just call this Application class instead.
 *
 * All new pages regarding the application need to be added in here, so they can be used
 */
class Application {
	constructor() {
		// -------------------------------------------------------------------------- Components --------------------------------------------------------------------//

		// --------------------------------------------------------------------------------Pages ----------------------------------------------------------------------//
		// Statement Management
		this.loginPage = new LoginPage()
		this.createAccountPage = new CreateAccountPage()
		this.homePage = new HomePage()
		this.listUsersPage =  new ListUsersPage()
	}	
}

export default Application

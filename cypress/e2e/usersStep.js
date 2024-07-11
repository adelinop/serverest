import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import Applications from '../support/pages/application'
const applications = new Applications()
export default class UserTests {}

When ('navigate to the user list page',()=>{
    applications.homePage.accessListOfUsers()
})

Then('I should see a list of registered users',()=>{
    applications.listUsersPage.verifyListOfUsers()
})
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import Applications from '../support/pages/application'
const applications = new Applications()
export default class LoginTests {}


Given('that I am on the registration page', ()=>{
    applications.loginPage.accessCreateAccount()    
    applications.createAccountPage.verifyIfCreateAccountPageLoaded()
})


When('I enter a {string} name, email and password to create an {string} account',(message, type)=>{
    applications.createAccountPage.createAccount(message, type)
    
})
Then ('I should be redirected to the home page',()=>{
    applications.homePage.verifyIfHomePageLoad()
})

Then('I should see an {string} message',(message)=>{
    applications.createAccountPage.verifyIfAccountCreated(message)
})  


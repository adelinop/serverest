import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
export default class CommonSteps {}
import Applications from '../support/pages/application'
const applications = new Applications()

Given('I access the system', () => {
	cy.visit('https://front.serverest.dev/login')
})

Given('I access the system with {string} user',(typeUser)=>{
    applications.loginPage.fillCredentials(typeUser)
})
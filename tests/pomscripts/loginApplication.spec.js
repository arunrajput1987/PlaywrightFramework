const {test,expect}= require('@playwright/test')
const LoginPage =require("../../pages/loginpage")
const HomePage = require('../../pages/homepage')


test("Verify, Login functionality using page object model", async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginPage= new LoginPage(page)

    await loginPage.loginToApplication("admin@email.com","admin@123")

    const homePage = new HomePage(page)

    await homePage.verifyManageOption()
    await homePage.logoutFromApplication()

    await loginPage.verifySignIn()
})
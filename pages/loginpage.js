const {expect}= require("@playwright/test")

class LoginPage{

    constructor(page){
        this.page = page
        this.username = "#email1"
        this.header="//h2[normalize-space()='Sign In']"
        this.password = "//input[@placeholder='Enter Password']"
        this.loginButton = "//button[text()='Sign in']"
    }

    

    async loginToApplication(uname,pass){

        await this.page.fill(this.username,uname)
        await this.page.fill(this.password,pass)
        await this.page.click(this.loginButton)

    }

    async verifySignIn(){

        await expect(this.page.locator(this.header)).toBeVisible()
    }
}

module.exports=LoginPage;
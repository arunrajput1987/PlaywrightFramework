const {test,expect}= require('@playwright/test')
const testData = JSON.parse(JSON.stringify(require("../../testData/testLoginData.json")));


test.describe("Data driven login test",function(){

    for(const data of testData){
        test.describe(`Login with users ${data.id}`, function(){
            test("Verify, Login to Application", async function({page}){

                        await page.goto("https://freelance-learn-automation.vercel.app/login")

                        await page.waitForTimeout(2000)

                        await page.locator("//input[@id='email1']").fill(data.username);
                        await page.waitForTimeout(1000)
                        await page.locator("//input[@id='password1']").fill(data.password);
                        await page.waitForTimeout(1000)

                        // await page.getByRole("button",{name:"Sign in"}).click()
                        // await page.waitForTimeout(1000)
            })
        })
    }

})


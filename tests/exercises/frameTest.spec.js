const {test,expect}= require('@playwright/test')


test("Verify, iFrames in web application", async function({page}){

    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    await page.waitForTimeout(2000)


    const iframe = await page.frameLocator("//frame[@name='packageListFrame']")
    await iframe.locator("//a[text()='java.applet']").first().click()

    //await page.pause();

}) 

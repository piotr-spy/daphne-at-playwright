import { test, expect } from "../../fixtures/page.objects"

test.describe(`Visual tests`, { tag:`@visualTests` }, () => { 

    test(`Home page visual test`, async ({ homePage }) => {
        await homePage.open()
        await expect(homePage.pageBody).toHaveScreenshot(`homePage.png`)
    })

    test(`Product page visual test`, async ({ homePage, productPage }) => {
        await homePage.open()
        await homePage.productCards.first().click()
        await expect(productPage.productImage).toBeVisible()
        await expect(productPage.pageBody).toHaveScreenshot(`productPage.png`)
    })

    test(`Login page visual test`, async ({ loginPage }) => {
        await loginPage.open()
        await expect(loginPage.loginContainer).toBeVisible()
        await expect(loginPage.pageBody).toHaveScreenshot(`loginPage.png`)
    })

})
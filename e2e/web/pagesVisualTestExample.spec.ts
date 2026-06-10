import { test, expect } from "../../fixtures/page.objects"

test.describe(`Visual tests example`, { tag:`@visualTests` }, () => { 

    test(`Home page visual test`, async ({ navigationPage, homePage }) => {
        await navigationPage.navigateTo(`home`)
        await expect(homePage.pageContent).toHaveScreenshot(`homePage.png`)
    })

    test(`Product page visual test`, async ({ navigationPage, homePage, productPage }) => {
        await navigationPage.navigateTo(`home`)
        await homePage.productCards.first().click()
        await expect(productPage.productImage).toBeVisible()
        await expect(productPage.pageBody).toHaveScreenshot(`productPage.png`)
    })

})
import { test, expect } from "../../utils/fixtures";

test.describe(`Home page tests`, () => {

    test.beforeEach(async ({ navigationPage }) => {
        await navigationPage.navigateTo(`home`)
    })

    test(`Layout basic check`, async ({ homePage }) => {
        await expect(homePage.topMessage).toBeVisible()
        await expect(homePage.searchInput).toBeVisible()
        await expect(homePage.headerMenu).toBeVisible()
        await expect(homePage.pageTitle).toBeVisible()
        await expect(homePage.pageContent).toBeVisible()
        await expect(homePage.footer).toBeVisible()
    })

})
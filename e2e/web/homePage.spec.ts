import test, { expect } from "@playwright/test";
import { NavigationPage } from "../../page-objects/navigation.page";
import { HomePage } from "../../page-objects/front.home.page";

test.describe(`Home page tests`, () => {
    
    test.beforeEach(async ({ page }) => {
        let navigationPage: NavigationPage
        navigationPage = new NavigationPage(page)
        await navigationPage.navigateTo(`home`)
    })

    test(`Layout basic check`, async ({ page }) => {
        let homePage: HomePage
        homePage = new HomePage(page)
        await expect(homePage.topMessage).toBeVisible()
        await expect(homePage.searchInput).toBeVisible()
        await expect(homePage.headerMenu).toBeVisible()
        await expect(homePage.pageTitle).toBeVisible()
        await expect(homePage.pageContent).toBeVisible()
        await expect(homePage.footer).toBeVisible()
        await expect(homePage.copyRightSection).toBeVisible()
    })

})
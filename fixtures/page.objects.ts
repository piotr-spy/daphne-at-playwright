import { test as base } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigation.page";
import { HomePage } from "../page-objects/front.home.page";
import { ProductPage } from "../page-objects/front.product.page";
import { LoginPage } from "../page-objects/front.login.page";

type Pages = {
    navigationPage: NavigationPage
    homePage: HomePage
    productPage: ProductPage
    loginPage: LoginPage
}

export const test = base.extend<Pages>({
    navigationPage: async ({ page }, use) => {
        await use(new NavigationPage(page))
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page))
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    }
})

export { expect } from "@playwright/test"
import { test as base } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigation.page";
import { HomePage } from "../page-objects/front.home.page";

type Pages = {
    navigationPage: NavigationPage
    homePage: HomePage
}

export const test = base.extend<Pages>({
    navigationPage: async ({ page }, use) => {
        await use(new NavigationPage(page))
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
})

export { expect } from "@playwright/test"

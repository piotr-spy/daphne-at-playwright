import { BasePage } from "./base.page";
import { Page } from "@playwright/test";

export class NavigationPage extends BasePage {
    
    constructor(page: Page) {
            super(page)
            this.page = page
        }

        public async navigateTo(page: string) {
            switch (page.toUpperCase()) {
                case `HOME`:
                    await this.page.goto(``)
                    break
                default:
                    throw new Error(`Page ${page} not found`)
            }
        }
}
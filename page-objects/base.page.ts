import { Page } from "@playwright/test";

/**
 * Base Page is a page object containing all methods, selectors, and functionalities
 * shared across all page objects
 */
export class BasePage {
    protected readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
     * Common selectors
     */
    public get pageBody() {
        return this.page.locator(`body`)
    }

    /**
     * Common methods
     */
    public async getTitle(): Promise<string> {
        return await this.page.title()
    }
    
    public async open(): Promise<void> {
        await this.page.goto(``)
    }
}
import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

/**
 * Home Page
 */
export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    /**
     * Overwrite specific options for the Home Page
     */
    public async open() {
        await this.page.goto('')
    }

    /**
     * Page Elements
     */
    public get topMessage() {
        return this.page.locator(`div.testing-notification-bar`)
    }
    public get searchInput() {
        return this.page.locator(`#search-query`)
    }
    public get headerMenu() {
        return this.page.locator(`nav.navbar.navbar-expand-lg`)
    }
    public get pageTitle() {
        return this.page.locator(`a.navbar-brand`)
    }
    public get pageContent() {
        return this.page.locator(`div.container app-overview`)
    }
    public get footer() {
        return this.page.locator(`app-footer`)
    }
}
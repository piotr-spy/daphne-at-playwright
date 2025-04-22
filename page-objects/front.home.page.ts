import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

/**
 * Home Page
 */
export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page)
        this.page = page
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
        return this.page.locator(`div.message.global.demo`)
    }
    public get searchInput() {
        return this.page.locator(`#search`)
    }
    public get headerMenu() {
        return this.page.locator(`nav.navigation`)
    }
    public get pageTitle() {
        return this.page.locator(`h1.page-title`)
    }
    public get pageContent() {
        return this.page.locator(`div.columns`)
    }
    public get footer() {
        return this.page.locator(`footer.page-footer`)
    }
    public get copyRightSection() {
        return this.page.locator(`small.copyright`)
    }
}
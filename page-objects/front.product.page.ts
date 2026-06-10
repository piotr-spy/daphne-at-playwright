import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ProductPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    /**
     * Page Elements
     */
    public get productImage() {
        return this.page.locator(`figure div.card-img-wrapper img`)
    }
}
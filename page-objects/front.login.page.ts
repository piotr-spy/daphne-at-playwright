import { Page } from "@playwright/test"
import { BasePage } from "./base.page"


export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    /**
     * Overwrite specific options for the Login Page
     */
    public async open() {
        await this.page.goto(`auth/login`)
    }

    /**
     * Page Elements
     */
    public get loginContainer() {
        return this.page.locator(`app-login div.auth-container`)
    }
    
}
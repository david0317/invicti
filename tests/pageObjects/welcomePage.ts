import {WebDriver, ByHash} from 'selenium-webdriver';
import { BasePage } from './common/basePage';
import { LoginPage } from './loginPage';
import { MainPage } from './mainPage';

export class WelcomePage extends BasePage{

    constructor(driver: WebDriver) {
        super(driver)
    }

    signIn = async (userName: string, password: string):Promise<MainPage> => {
        let loginPage = await this.clickOnSignIn();
        await loginPage.fillUserName(userName);
        await loginPage.fillPassword(password);
        await loginPage.clickOnLogin();
        return new MainPage(this.driver);
    }

    clickOnSignIn = async():Promise<LoginPage> =>{
        await this.click(this.headerComponent.btnLogin);
        return new LoginPage(this.driver);
    }

    waitForPageToLoad = async () => {
        await this.headerComponent.waitForComponentToLoad();
        await this.footerComponent.waitForComponentToLoad();
        await this.mainMenuComponent.waitForPageToLoad;
        await this.sideMenuComponent.waitForPageToLoad();
    }

}
import {WebDriver, ByHash, WebElement} from 'selenium-webdriver';
import { SeleniumWebdriverWrapper } from '../../helper/seleniumWrapper';

export class MainMenuBarComponent extends SeleniumWebdriverWrapper { 

    parent: ByHash = {xpath: '//tr[./td[contains(@class, "bt")]]'};
    lnkOnlineBankingLogin: ByHash = {id: 'AccountLink'};
    lnkPersonal: ByHash = {id: 'LinkHeader2'};
    lnkSmallBusiness: ByHash = {id: 'LinkHeader3'};
    lnkInsideAltoro: ByHash = {id: 'LinkHeader4'}

    constructor(driver: WebDriver) {
        super(driver)
    }

    waitForPageToLoad = async () => {
        await this.waitUntilElementLoadedAndDIsplayed(this.parent)
    }

    doSanity = async () => {
        let locators:ByHash[] = [this.lnkOnlineBankingLogin, this.lnkPersonal, this.lnkSmallBusiness, this.lnkSmallBusiness, this.lnkInsideAltoro]
        await this.waitUntilElementsAreLoadedAndDisplayed(locators);
    }
}
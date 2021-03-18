import {WebDriver, ByHash, WebElement} from 'selenium-webdriver';
import { SeleniumWebdriverWrapper } from '../../helper/seleniumWrapper';

export class SideMenuComponent extends SeleniumWebdriverWrapper { 

    parent: ByHash = {xpath: '//td[@class = "cc br bb"]'}
    links: ByHash = {xpath: '//td[@class = "cc br bb"]//a'}
    
    constructor(driver: WebDriver) {
        super(driver)
    }

    waitForPageToLoad = async () => {
        await this.waitUntilElementLoadedAndDIsplayed(this.parent)
    }

    doSanity = async () => {
        let locators:ByHash[] = [this.parent, this.links]
        await this.waitUntilElementsAreLoadedAndDisplayed(locators);
    }

}
import {WebDriver, ByHash, WebElement} from 'selenium-webdriver';
import { SeleniumWebdriverWrapper } from '../../helper/seleniumWrapper';

export class HeaderComponent extends SeleniumWebdriverWrapper { 

    parent: ByHash = {id: 'header'};
    btnLogin: ByHash = {id: 'LoginLink'};
    imgLogo: ByHash = {css: '#HyperLink1 img'};
    imgHeader: ByHash = {xpath: '//img[contains(@src, "header_pic.jpg")]'};
    btnContactUs: ByHash = {id: 'HyperLink3'};
    btnFeedback: ByHash = {id: 'HyperLink4'};
    inpSearch: ByHash = {id: 'query'};
    btnQueryGo: ByHash = {xpath: '//div[@id="header"]//input[@value="Go"]'};
    
    constructor(driver: WebDriver) {
        super(driver)
    }

    waitForComponentToLoad = async () => {
        await this.waitUntilElementLoadedAndDIsplayed(this.parent)
    }

    doSanity = async () => {
        let locators:ByHash[] = [this.btnContactUs, this.btnFeedback, this.btnLogin, this.btnQueryGo, this.imgHeader, this.imgLogo, this.inpSearch]
        await this.waitUntilElementsAreLoadedAndDisplayed(locators);
    }

}
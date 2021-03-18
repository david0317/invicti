import {WebDriver, ByHash, WebElement} from 'selenium-webdriver';
import { SeleniumWebdriverWrapper } from '../../helper/seleniumWrapper';

export class FooterComponent extends SeleniumWebdriverWrapper { 
    
    parent: ByHash = {id: 'footer'};

    lnkPrivacyPolicy: ByHash = {id: 'HyperLink6'};
    lnkSecurityStatement: ByHash = {linkText: 'Security Statement'};
    lnkServerStatusCheck: ByHash = {linkText: 'Server Status Check'};
    lnkRestApi: ByHash = {linkText: 'REST API'};
    lnkGithub: ByHash = {linkText: 'Get your copy from GitHub'};
    disclaimer: ByHash = {className: 'disclaimer'};

    constructor(driver: WebDriver) {
        super(driver)
    }

    waitForComponentToLoad = async () => {
        await this.waitUntilElementLoadedAndDIsplayed(this.parent)
    }

    doSanity = async () => {
        let locators:ByHash[] = [this.lnkGithub, this.lnkPrivacyPolicy, this.lnkRestApi, this.lnkSecurityStatement, this.lnkServerStatusCheck, this.disclaimer]
        await this.waitUntilElementsAreLoadedAndDisplayed(locators);
    }

}
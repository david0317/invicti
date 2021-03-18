import {WebDriver, ByHash, WebElement} from 'selenium-webdriver';
import { BasePage } from './common/basePage';

export class MainPage extends BasePage {

    
    private slcAccountList: ByHash = {id: 'listAccounts'};
    private optAccounts: ByHash = {xpath: '//select[@id = "listAccounts"]/option'}
    private btnGo: ByHash = {id: 'btnGetAccount'};
    
    constructor(driver: WebDriver) {
        super(driver)
    }

    public getAccounts = async (): Promise<WebElement[]> =>{
        return await this.findElements(this.optAccounts);
    }

    public selectAccount = async (account: string) => {
        await this.click(this.slcAccountList);
        (await this.getAccounts()).filter(async (elem) => {
            const text = await elem.getText();
            return text == account;
          })[0].click();
    }
}
import {WebDriver, ByHash} from 'selenium-webdriver';
import { BasePage } from './common/basePage';
import { MainPage } from './mainPage';

export class LoginPage extends BasePage { 
    private inpUsername : ByHash = {id: 'uid'};
    private inpPassword : ByHash = {id: 'passw'};
    private btnLogin: ByHash = {name: 'btnSubmit'};

    constructor(driver: WebDriver) {
        super(driver)
    }

    fillUserName = async (name: string) =>{
        await this.fillInput(this.inpUsername, name);
    }

    fillPassword = async (pw: string) =>{
        await this.fillInput(this.inpPassword, pw);
    }

    clickOnLogin = async ():Promise<MainPage> => {
        await this.click(this.btnLogin);
        return new MainPage(this.driver);
    }

}
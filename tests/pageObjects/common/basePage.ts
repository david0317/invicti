import {WebDriver, ByHash, WebElement} from 'selenium-webdriver';
import { SeleniumWebdriverWrapper } from '../../helper/seleniumWrapper';
import { FooterComponent } from './footerComponent';
import { HeaderComponent } from './headerComponent';
import { MainMenuBarComponent } from './mainMenuComponent';
import { SideMenuComponent } from './sideMenuComponent';

export class BasePage extends SeleniumWebdriverWrapper { 

    headerComponent: HeaderComponent;
    footerComponent: FooterComponent;
    mainMenuComponent: MainMenuBarComponent;
    sideMenuComponent: SideMenuComponent;
    
    constructor(driver: WebDriver) {
        super(driver)
        this.headerComponent = new HeaderComponent(driver);
        this.footerComponent = new FooterComponent(driver);
        this.mainMenuComponent = new MainMenuBarComponent(driver);
        this.sideMenuComponent = new SideMenuComponent(driver);
    }

    openWelcomePage = async () =>{
        await this.driver.get("http://demo.testfire.net/index.jsp");
        await this.maximizeWindow();
    }

}
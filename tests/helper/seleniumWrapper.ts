import {elementWaitTimeOutValue} from './timeouts';
import {
  WebDriver,
  until,
  WebElementPromise,
  Locator,
  WebElement,
  Actions,
  Key,
  Condition
} from 'selenium-webdriver';
  // Include the chrome driver 
  require("chromedriver"); 
  // Include selenium webdriver 
  const {Builder} = require('selenium-webdriver');
//let swd = require("selenium-webdriver"); 
//let browser = new swd.Builder(); 
//let tab = browser.forBrowser("chrome").build(); 

export class SeleniumWebdriverWrapper {
    
  constructor(readonly driver: WebDriver) {
  }

    /**
     * Wait for an element to exist and then wait for it to be visible, using default timeout value
     * 
     * @param  {Locator} locator
     * 
     * @return {Promise<WebElementPromise>}
     */
    waitUntilElementLoadedAndDIsplayed = async (locator: Locator): Promise<WebElementPromise> => {
      const locatorValue = JSON.stringify(locator);
      this.driver.wait(until.elementLocated(locator), elementWaitTimeOutValue, `Element is not found with : ${locatorValue}`);
      this.driver.wait(until.elementIsVisible(this.driver.findElement(locator)), elementWaitTimeOutValue, `Element is not visible with: ${locatorValue}`);

      return this.driver.findElement(locator);
    }

    /**
     * Wait for all elements in the array to exist and then wait for it to be visible each and every element. 
     * Using default timeout value
     * 
     * @param  {Array<Locator>} locators
     * 
     * @return {Promise<WebElementPromise>}
     */
    waitUntilElementsAreLoadedAndDisplayed = async( locators: Array<Locator>): Promise<WebElementPromise> => {
        let webElements = locators.map( async locator => await this.waitUntilElementLoadedAndDIsplayed(locator));
        return (Promise as any).all(webElements);
    }

    /**
     * Wait for a condition to be true.
     * 
     * @param  {any} condition
     */
    waitUntilConditionIs = async (condition: any) => {
      this.driver.wait(condition);
    }

    /**
     * Wait for an element to exist and to be visible, then clicks on it.
     * 
     * @param  {Locator} locator
     */
    click = async (locator: Locator) => {
      await this.waitUntilElementLoadedAndDIsplayed(locator);
      await this.driver.findElement(locator).click();
    }

    /**
     * Wait for an element to exist and to be visible, then send value into it
     * 
     * @param  {Locator} locator
     * @param  {string} value
     */
    fillInput = async (locator: Locator, value: string) =>
    await (await this.waitUntilElementLoadedAndDIsplayed(locator)).sendKeys(value);
    
    /**
     * Find an element, wait for it to exist and to be visible, then gives it back
     * 
     * @param  {Locator} locator
     * 
     * @return  {Promise<WebElementPromise>}
     */
    findElement = async (locator: Locator): Promise<WebElementPromise> => {
      await this.waitUntilElementLoadedAndDIsplayed(locator);
      return await this.driver.findElement(locator);
    }

    /**
     * Find all elements with the given locator, wait for it to exist and to be visible, then gives them back
     * 
     * @param  {Locator} locator
     * 
     * @return  {Promise<any>}
     */
    findElements = async (locator: Locator): Promise<any> => {
      await this.waitUntilElementLoadedAndDIsplayed(locator);
      return await this.driver.findElements(locator);
    }
    
    /**
     * Maximizes browser window
     */
    maximizeWindow = async () => {
      await this.driver.manage().window().maximize();
    };

    /**
     * Closes webdriver
     */
    quit = async () =>{
      await this.driver.quit();
    }

    /**
     * Takes screenshot of the page
     * 
     * @return Promise<string>
     */
    takeScreenshot = async ():Promise<string> =>{
      return await this.driver.takeScreenshot()
    }

}
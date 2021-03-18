import {When, Before, Then, World, After, AfterStep, Status} from '@cucumber/cucumber';
import {SeleniumWebdriverWrapper} from '../helper/seleniumWrapper';
import {stepTimeOut} from '../helper/timeouts';
import { MainPage } from '../pageObjects/mainPage';
import { WelcomePage } from '../pageObjects/welcomePage';
import assert = require('assert');
import { WebDriver } from 'selenium-webdriver';
import Logger from "../helper/logger/logger";
import winston = require('winston/lib/winston/config');

let credentials = require("../resources/credentials.json"); 
let webdriver = require('selenium-webdriver');
let driverWrapper : SeleniumWebdriverWrapper;
let welcomePage: WelcomePage;
let mainPage: MainPage;

Before( {timeout: stepTimeOut}, async function(this: World) {
  Logger.debug('Setting up Chrome capabilities');
  let chromeCapabilities = webdriver.Capabilities.chrome();
  //setting chrome options to start the browser fully maximized
  let chromeOptions = {
    'args': ['--start-maximized', 'window-size=1920,1080']
  };
  chromeCapabilities.set('chromeOptions', chromeOptions);
  Logger.debug('Starting chrome');
  let driver: WebDriver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
    driverWrapper = new SeleniumWebdriverWrapper(driver);
    welcomePage = new WelcomePage(driver);
    mainPage = new MainPage(driver);
});

When(/^I enter with admin$/, async () => {
  Logger.info('Opening Welcome page');
  await welcomePage.openWelcomePage();
  Logger.info('Signing in with');
  await welcomePage.signIn(credentials.username, credentials.password);
});
  
Then(/^I should see 2 accounts$/, async () => {
  Logger.info('Checking number of available accounts');
  await mainPage.getAccounts().then((items) => {
    assert.strictEqual(items.length, 2);
  });
});

When(/^I open the page$/, async () => {
  Logger.info('Opening Welcome page');
  await welcomePage.openWelcomePage();
});

Then(/^The page loads correctly$/, async () => {
  Logger.info('Doing Sanity check of Header Component');
  await welcomePage.headerComponent.doSanity();
  Logger.info('Doing Sanity check of Footer Component');
  await welcomePage.footerComponent.doSanity();
  Logger.info('Doing Sanity check of Side Menu Component');
  await welcomePage.sideMenuComponent.doSanity();
  Logger.info('Doing Sanity check of Main Menu Component');
  await welcomePage.mainMenuComponent.doSanity();
});

After( async () =>{
  Logger.debug('Quitting driver')
  await driverWrapper.quit();
})

AfterStep( function (this: World, {result}) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  if (result.status === Status.FAILED) {
    let me = this;
    driverWrapper.takeScreenshot().then(function(screenShot) {
      me.attach(screenShot, 'base64:image/png');
    });
  }
});
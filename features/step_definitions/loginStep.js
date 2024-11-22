const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
require('chromedriver');
const {By, Builder, Capabilities} = require('selenium-webdriver');
const capabilities = Capabilities.chrome();
capabilities.set('chromeoptions', {'w3c':false});


Given(/^A user visits foundry login page$/, async() => {
	this.driver  = new Builder().withCapabilities(capabilities).build();
	await this.driver.get('https://youth-foundry-virtual-stg.foundrybc.ca/account/login');
	
});






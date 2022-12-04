const { Before, Given, When, Then } = require('@wdio/cucumber-framework');
const locators = require('./locators');

Before(async function () {
    await browser.reloadSession()
});

Given("I am on the home page", async () => {
    await browser.url("https://www.newegg.com");
});

Given("The promo banner is closed", async () => {
    try {
        await expect($(locators.promoBanner)).toBeDisplayed();
        await $(locators.closeButton).click();
    } catch (err) {
        console.log("No promo banner to close!");
    }
});

When("I enter the word {string} in the search bar", async (keyword) => {
    await $(locators.searchField).setValue(keyword);
});

When("I click the search button", async () => {
    await $(locators.searchButton).click();
});

When("I open Today's Best Deals tab", async () => {
    await $(locators.bestDealsButton).click();
});

When("Click the internet shop logo", async () => {
    await $(locators.shopLogo).click();
});

Then("I should see at least {int} items", async (count) => {
    await expect($$(locators.items)).toBeElementsArrayOfSize({ gte: count });
});

Then("I should be taken back to home page", async () => {
    await expect(browser).toHaveUrl("https://www.newegg.com/");
});
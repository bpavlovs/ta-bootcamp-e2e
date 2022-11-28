const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the home page", async () => {
    await browser.url("https://www.newegg.com");
});

Given("The promo banner is closed", async () => {
    const promoBanner = await $('img[class="modal-Website-img"]');
    const closeButton = await $('button[class="close"]');

    try {
        await expect(promoBanner).toBeDisplayed();
        await closeButton.click();
    } catch (err) {
        console.log("No promo banner to close!");
    }
});

When("I enter the word {string} in the search bar", async (keyword) => {
    const searchField = await $('input[type="search"]');
    await searchField.setValue(keyword);
});

When("I click the search button", async () => {
    const searchButton = await $('button[class="ico ico-search"]');
    await searchButton.click();
});

When("I open Today's Best Deals tab", async () => {
    const bestDealsButton = await $('a[id="trendingBanner_720202"]');
    await bestDealsButton.click();
});

When("Click the internet shop logo", async () => {
    const shopLogo = await $('a[class="header2021-logo-img"]');
    await shopLogo.click();
});

Then("I should see at least {int} items", async (count) => {
    const items = await $$('div[class="item-cell"]');
    await expect(items).toBeElementsArrayOfSize({ gte: count });
});

Then("I should be taken back to home page", async () => {
    await expect(browser).toHaveUrl("https://www.newegg.com/");
});



const { When, Then } = require('@wdio/cucumber-framework');
const locators = require('./locators');
const variables = require('./variables');

When("I open the first item", async () => {
    const items = await $$(locators.items);
    await items[0].click();
});

When("I save the item title", async () => {
    await expect($(locators.expectedTitle)).toBeExisting();
    variables.itemName = await $(locators.expectedTitle).getText();
});

When("I add item to my cart", async () => {
    await $(locators.addToCartButton).click();
    await $(locators.noProtectionButton).click();
});

When("I go to my cart", async () => {
    await $(locators.viewCartButton).click();
});

When("I remove the item", async () => {
    await $$(locators.removeItemButton)[1].click();
});

When("I increase an item's quantity by {int}", async (quantity) => {
    await expect($(locators.increaseQuantityButton)).toBeClickable();

    for (let i = 0; i < quantity; i++) {
        await $(locators.increaseQuantityButton).click();
    }
});

When("I save item's quantity", async () => {
    variables.itemQuantity = await $(locators.itemQuantityInput).getAttribute('value');
});

Then("I am able to see my item in the cart", async () => {
    await expect($(locators.actualTitle)).toHaveText(variables.itemName);
});

Then("My cart is empty", async () => {
    await expect($(locators.cartMessage)).toHaveTextContaining("Oh...seems like the cart is empty...");
});

Then("Item's new quantity is reflected in the cart", async () => {
    variables.cartItemQuantity = await $(locators.cartItemQuantityInput).getAttribute('value');
    await expect(variables.cartItemQuantity).toEqual(variables.itemQuantity);
});
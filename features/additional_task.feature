Feature: Additional Task

    Background:
        Given I am on the home page
        * The promo banner is closed

    Scenario: As a user, I am able to add an item to my cart
        When I open Today's Best Deals tab
        * I open the first item
        * I save the item title
        * I add item to my cart
        * I go to my cart
        Then I am able to see my item in the cart

    Scenario: As a user, I am able to remove an item from my cart
        When I open Today's Best Deals tab
        * I open the first item
        * I add item to my cart
        * I go to my cart
        * I remove the item
        Then My cart is empty

    Scenario: As a user, I am able to set quantity of an item before adding it to cart
        When I open Today's Best Deals tab
        * I open the first item
        * I increase an item's quantity by 1
        * I save item's quantity
        * I add item to my cart
        * I go to my cart
        Then Item's new quantity is reflected in the cart
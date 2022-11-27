Feature: Bootcamp E2E

  Background:
    Given I am on the home page
    * The promo banner is closed

  Scenario: As a user, I am able to look up items via search bar
    When I enter the word "Windows" in the search bar
    * I click the search button
    Then I should see at least 1 items

  Scenario: As a user, I am able to return to home page via shop logo button
    When I open Today's Best Deals tab
    * Click the internet shop logo
    Then I should be taken back to home page

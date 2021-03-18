@example
Feature: My Example
  As a user I would like to login and logout.

  Scenario: Login and check available acounts
    When I enter with admin
    Then I should see 2 accounts

  Scenario: Open the page and do a sanity check
    When I open the page
    Then The page loads correctly
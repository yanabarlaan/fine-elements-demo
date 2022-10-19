Feature: Demo

Scenario: User navigate to app menu sees action bar
  When user click "App" button from the menu
  Then user should be able to see the "Action Bar"

Scenario: Find by Android UIAutomator
  When user find element by UIAutomator
  Then user should redirect to "App Alert Dialogs" screen

@skip
Scenario: Find element by xpath
  When find element by xpath
  And user find element by resource id
  Then user find by class 


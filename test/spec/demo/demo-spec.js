const { When, Then } = require("@cucumber/cucumber");

// Scenario: User navigate to app menu sees action bar
When(`user click "App" button from the menu`, async () => {
  await $("~App").click();
});

Then(`user should be able to see the "Action Bar"`, async () => {
  await expect($("~Action Bar")).toBeDisplayed();
});

// Scenario: Find element by xpath
When(`find element by xpath`, async () => {
  await $(`//android.widget.TextView[@content-desc="Alert Dialogs"]`).click();
});

When(`user find element by resource id`, async () => {
  // resource id
  await $(
    `//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]`
  ).click();

  // by text
  await $('//android.widget.TextView[@text="Command two"]').click();
});

Then(`user find by class`, async () => {
  // find by class
  const textAssertion = await $("//android.widget.TextView");
  await expect(textAssertion).toHaveText("You selected: 1 , Command two");
});

// Scenario: Find by Android UIAutomator
When(`user find element by UIAutomator`, async () => {
  await $(`android=new UiSelector().textContains("Alert")`).click();
  await driver.pause(2000);
});

Then(`user should redirect to "App Alert Dialogs" screen`, async () => {
  await expect(
    $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    )
  ).toBeDisplayed();
});

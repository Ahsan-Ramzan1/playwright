const { test, expect } = require('../fixtures/base');

const { itemsToCheck } = require('../data/dataFile.js');

test.describe.serial("e2e Test", () => {
  test("Check all items are present in list", async ({ page, playwrightPage }) => { 
    await playwrightPage.open('https://playwright.dev/');

    await playwrightPage.navigateToGettingStarted();

    // Use the getter methods to retrieve the text of each item
    const whatsInstalledText = await playwrightPage.getWhatsInstalledText();
    const runExampleTestText = await playwrightPage.getRunExampleTestText();
    const openHtmlTestReportText = await playwrightPage.getOpenHtmlTestReportText();
    const writeTestsText = await playwrightPage.getWriteTestsText();
    const runSingleTestText = await playwrightPage.getRunSingleTestText();
    const generateTestsText = await playwrightPage.getGenerateTestsText();
    const traceTestsText = await playwrightPage.getTraceTestsText();

    // Create an array with the text of the items
    const todoListItems = [
      whatsInstalledText,
      runExampleTestText,
      openHtmlTestReportText,
      writeTestsText,
      runSingleTestText,
      generateTestsText,
      traceTestsText,
    ];

    // Find missing items
    const missingItems = itemsToCheck.filter(
      (item) => !todoListItems.includes(item)
    );

    if (missingItems.length === 0) {
      console.log('All items are present in the to-do list.');
    } else {
      console.error('The following items are missing:');
      missingItems.forEach((item) => console.error(`- ${item}`));
    }
  });
});

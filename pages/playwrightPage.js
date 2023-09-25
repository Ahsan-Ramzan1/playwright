exports.PlaywrightPage = class PlaywrightPage {
  constructor(page) {
    this.page = page;
    this.gettingStartedBtn = page.locator(`text=Getting Started`)
    this.humburgerHeading = `(//*[@class="menu__list-item-collapsible"])[1]/a`
    this.whatsInstalledLink = page.locator(`(//a[text()="What's Installed"])[1]`);
    this.runExampleTestLink = page.locator(`text=How to run the example test`);
    this.openHtmlTestReportLink = page.locator(`text=How to open the HTML test report`);
    this.writeTestsLink = page.locator(`text=Write tests using web first assertions, page fixtures and locators`);
    this.runSingleTestLink = page.locator(`text=Run single test, multiple tests, headed mode`);
    this.generateTestsLink = page.locator(`text=Generate tests with Codegen`);
    this.traceTestsLink = page.locator(`text=See a trace of your tests`);
  }

  async open(pageUrl) {
    await this.page.goto(pageUrl);
  }

  async navigateToGettingStarted() {
    await this.gettingStartedBtn.click();
    await this.page.waitForSelector(this.humburgerHeading);
  }

  async getWhatsInstalledText() {
    return await this.whatsInstalledLink.textContent();
  }

  async getRunExampleTestText() {
    return await this.runExampleTestLink.textContent();
  }

  async getOpenHtmlTestReportText() {
    return await this.openHtmlTestReportLink.textContent();
  }

  async getWriteTestsText() {
    return await this.writeTestsLink.textContent();
  }

  async getRunSingleTestText() {
    return await this.runSingleTestLink.textContent();
  }

  async getGenerateTestsText() {
    return await this.generateTestsLink.textContent();
  }

  async getTraceTestsText() {
    return await this.traceTestsLink.textContent();
  }
}
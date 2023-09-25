const Base = require("@playwright/test")
const { PlaywrightPage } = require("../pages/playwrightPage")

exports.test = Base.test.extend({
    playwrightPage: async ({ page }, use) => {
        await use ( new PlaywrightPage(page))
    }
})

exports.expect = Base.expect
exports.request = Base.request
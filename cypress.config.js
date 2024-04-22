const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 40000,
  videoCompression: true,
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  requestTimeout: 40000,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    env: {
      BASE_URL: 'http://localhost:3000',
    },
  },
});

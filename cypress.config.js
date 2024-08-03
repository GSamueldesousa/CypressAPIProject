const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'bvx9ep',
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    specPattern: 'cypress/e2e/integration/**/*.{js,jsx,ts,tsx}',
    supportFile: false,
    baseUrl: 'https://fakerestapi.azurewebsites.net',
  },
});

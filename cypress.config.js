const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Porta padrão para o container rodar os testes
    baseUrl: 'http://localhost:8080',
    supportFile: false,
    specPattern: 'cypress/e2e/**/*.spec.js'
  },
});
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Aponta para a porta padrão do seu Live Server/Mapeamento local
    baseUrl: 'http://localhost:5501/FocusFlow',
    supportFile: false
  },
});
const { defineConfig } = require("cypress");
const createMochawesomeReporter = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      // Configura o Mochawesome Reporter
      createMochawesomeReporter(on);

      // Configuração para a navegação entre abas no Chrome (se necessário)
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          const debuggingPort = launchOptions.args.find(
            (arg) => arg.slice(0, 23) === '--remote-debugging-port'
          );
          if (debuggingPort) {
            const port = debuggingPort.split('=')[1];
            console.log(`Debugging port: ${port}`);
            // Adicionar outras configurações, se necessário
          }
        }
        return launchOptions;
      });

      // Defina a tarefa 'tabNavigation' ou remova, caso não precise
      on('task', {
        tabNavigation() {
          // Adicione o comportamento desejado aqui para a navegação entre abas
          console.log("Navegando entre as abas...");
          return null;
        }
      });
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    },
    env: {
      MY_ENV: process.env.MY_ENV,
      ebacStoreVersion: "v2"
    }
  }
});

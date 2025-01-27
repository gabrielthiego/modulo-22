const { defineConfig } = require("cypress");
const createMochawesomeReporter = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {

      createMochawesomeReporter(on);  
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          const debuggingPort = launchOptions.args.find(
            (arg) => arg.slice(0, 23) === '--remote-debugging-port',
          );
          setDebuggingPort(debuggingPort.split('='));const { defineConfig } = require("cypress");
          const createMochawesomeReporter = require('cypress-mochawesome-reporter/plugin');
          
          module.exports = defineConfig({
            e2e: {
              baseUrl: 'http://lojaebac.ebaconline.art.br/',
              setupNodeEvents(on, config) {
                createMochawesomeReporter(on);
              },
              env: {
                MY_ENV: process.env.MY_ENV,
                ebacStoreVersion: "v2"
              },
              reporter: 'cypress-mochawesome-reporter',
              reporterOptions: {
                reportDir: 'cypress/reports',
                overwrite: false,
                html: true,
                json: true
              }
            },
          });
          
        }
        return launchOptions;
      });

      on('task', {
        tabNavigation
      });

    },
    env: {
      MY_ENV: process.env.MY_ENV,
      ebacStoreVersion: "v2"  
    }
  },
});

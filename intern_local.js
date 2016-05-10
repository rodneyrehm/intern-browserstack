define({
  proxyPort: 9000,

  capabilities: {
    name: 'Sample Intern Live-Testing',
    build: 'build',
    "browserstack.local": true
  },

  defaultTimeout: 300000,

  environments: [
    { browser: 'Chrome', browser_version: '44.0', os: 'OS X', os_version: 'Yosemite' },
    { browser: 'Firefox', browser_version: '40.0', os: 'Windows', os_version: 'XP' },
    { browser: 'Opera', browser_version: '12.16', os: 'Windows', os_version: '8.1' },
    { browser: 'IE', browser_version: '11.0', os: 'Windows', os_version: '10' }
  ],

  maxConcurrency: 2,

  tunnel: 'BrowserStackTunnel',

  tunnelOptions: {
    verbose: true,
    username: process.env.BROWSERSTACK_USERNAME,
    accessKey: process.env.BROWSERSTACK_KEY
  },

  reporters: [ 'Pretty' ],

  loaderOptions: {
    packages: null
  },

  suites: null,

  functionalSuites: [ 'tests/utils' ],

  excludeInstrumentation: true
});

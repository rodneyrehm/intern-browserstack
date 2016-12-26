define({
  proxyPort: 9000,

  capabilities: {
    name: 'parallel_test',
    build: 'intern-browserstack',
    "browserstack.local": false,
    fixSessionCapabilities: false
  },

  defaultTimeout: 300000,

  environments: [
    { browser: 'Chrome'},
    { browser: 'Safari' },
    { browser: 'IE', nativeEvents: true},
    { browser: 'Firefox', browser_version: '47', browserName: 'Firefox 47' },
    { browser: 'Firefox', browser_version: '48', browserName: 'Firefox 48' },
    { browser: 'Firefox', browser_version: '49', browserName: 'Firefox 49' },
    { browser: 'Firefox', browser_version: '50', browserName: 'Firefox 50' },
  ],

  maxConcurrency: 2,

  tunnel: 'BrowserStackTunnel',

  tunnelOptions: {
    verbose: true,
    username: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    accessKey: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY'
  },

  reporters: [ 'Pretty' ],

  loaderOptions: {
    packages: null
  },

  suites: null,

  functionalSuites: [ 'tests/single_test' ],

  excludeInstrumentation: true
});

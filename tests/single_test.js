define([
  'intern!object',
  'intern/chai!assert',
  'require'
], function (registerSuite, assert, require, registry) {
  registerSuite({
    name: 'Google\'s Search Functionality',

    'can find search results': function () {
      return this.remote
        .get(require.toUrl('https://www.google.com/ncr'))
        .findByName("q")
          .type("BrowserStack\n")
          .end()
        .sleep(5000)
        .getPageTitle()
        .then(function(title){
          assert.strictEqual(title, 'BrowserStack - Google Search')
        });
    }
  });
});

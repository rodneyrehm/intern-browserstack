define([
  'intern!object',
  'intern/chai!assert',
  'require'
], function (registerSuite, assert, require, registry) {
  registerSuite({
    name: 'BrowserStack Local Testing',

    'can check tunnel working': function () {
      return this.remote
        .get(require.toUrl('http://localhost:9000'))
        .getPageSource()
        .then(function(title){
          assert.match(title, /404 Not Found/i)
        });
    }
  });
});

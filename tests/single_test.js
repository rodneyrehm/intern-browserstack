define([
  'intern!object',
  'intern/chai!assert',
  'require'
], function (registerSuite, assert, require, registry) {
  registerSuite({
    name: 'Browser Window Focus',

    before: function() {
      return this.remote
        .setPageLoadTimeout(300000)
        .setFindTimeout(300000)
        .setExecuteAsyncTimeout(300000)
        .get(require.toUrl('https://www.google.com/ncr'))
    },

    'document has focus': function () {
      return this.remote
        .execute(function() {
          // executed in the browser
          return document.hasFocus();
        })

        .then(function(hasFocus) {
          // executed in node
          assert.equal(hasFocus, true);
        });
    },

    'handles click event': function () {
      return this.remote
        // remove focus from the input
        .execute(function() {
          // executed in the browser
          document.activeElement.blur();
        })

        .execute(function() {
          // executed in the browser
          document.documentElement.addEventListener('focus', function(event) {
            document.documentElement.setAttribute('data-focused', event.target.nodeName);
          }, true);
        })

        .findByName("q")
          .click()
          .end()

        // IE handles focus events asynchronously
        .sleep(200)

        .execute(function() {
          // executed in the browser
          return document.documentElement.getAttribute('data-focused');
        })

        .then(function(attributeValue) {
          // executed in node
          assert.equal(attributeValue, 'INPUT');
        });
    }

  });
});

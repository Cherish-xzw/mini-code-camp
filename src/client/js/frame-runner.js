document.addEventListener('DOMContentLoaded', function () {

  var assert = chai.assert;

  document.__runTests = function (tests) {
    tests = tests || [];
    tests.map(function (obj) {
      var test;
      var result;
      try {
        test = eval(obj.testString);
        if (typeof test === 'function') {

        } else {

        }
      } catch (e) {
        console.error(e);
      }
    });
  }

});

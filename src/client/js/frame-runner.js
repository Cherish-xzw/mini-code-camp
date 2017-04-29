document.addEventListener('DOMContentLoaded', function () {
  let assert = chai.assert;

  document.__runTests = function (tests) {
    tests = tests || [];
    tests.map(function (obj) {
      let test;
      let result;
      try {
        test = eval(obj.testString);
        if (typeof test === 'function') {

        } else {

        }
      } catch (e) {
        console.error(e);
      }
    });
  };
});

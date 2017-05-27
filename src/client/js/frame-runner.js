document.addEventListener('DOMContentLoaded', function () {
  let assert = chai.assert;
  const source = document.__source;

  document.__runTests = function (tests) {
    const code = source;
    tests = tests || [];
    tests.map(function (obj) {
      let test;
      let result;
      // try {
        test = eval(obj.testString);
        if (typeof test === 'function') {

        } else {

        }
      // } catch (e) {
      //   console.error(e.message);
      // }
    });
  };
});


function createTests(tests) {
  return tests
    .map((test) => {
      if (typeof test === 'string') {
        return {
          text: ('' + test).split('message: ').pop().replace(/\'\);/g, ''),
          testString: test
        };
      }
      return test;
    });
}

module.exports = {
  createTests: createTests
};

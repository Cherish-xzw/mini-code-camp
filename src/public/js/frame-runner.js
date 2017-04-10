document.addEventListener('DOMContentLoaded', function () {
    document.__runTests = function (tests) {
        var tests = tests || [];
        var assert = chai.assert;
        try {
            assert($("div").hasClass("container-fluid"), 'message: Your <code>div</code> element should have the class <code>container-fluid</code>.')
            console.log("success.");
        } catch (error) {
            console.error(error.message);
        }
    }
})
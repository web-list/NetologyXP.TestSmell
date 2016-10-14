'use strict';

var _chai = require('chai');

var enterPhoneNumber = function enterPhoneNumber() {};

suite('string asserts', function () {
    setup(function () {});

    test('do not check substring for not contains', function () {
        enterPhoneNumber();

        var errorMessage = "Please, enter first name\nPlease enter last name";

        (0, _chai.expect)(errorMessage).to.not.contain('Please enter phone number');
    });

    teardown(function () {});
});

//# sourceMappingURL=stringAssertsTests-compiled.js.map
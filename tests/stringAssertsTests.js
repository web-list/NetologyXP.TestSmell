import { expect } from 'chai'
var enterPhoneNumber = function() {

}

suite('string asserts', function () {
    setup(function () {
    });

    test('do not check substring for not contains', function () {
        enterPhoneNumber();

        let errorMessage = "Please, enter first name\nPlease enter last name";

        expect(errorMessage).to.not.contain('Please enter phone number');
    });

    teardown(function() {
    })
});
'use strict';
describe("TEST FOR PERSON SERVICE", function () {
    var personService;

    //calls the module to f
    beforeEach(function () {
        console.log("test");
        angular.mock.module('appName');
        inject(function (_personService_) {
            samplePerson = _personService_;
        });

    });

    it("sample test", function () {
        expect(2).toBe(2);
    });

});
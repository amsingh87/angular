'use strict';
describe("TEST FOR PERSON SERVICE", function () {
    var samplePerson;

    //calls the module to f
    beforeEach(function () {
        console.log("test");
        angular.mock.module('appName');
        inject(function (_samplePerson_) {
            samplePerson = _samplePerson_;
        });

    });

    it("Last name should be Doe by Default", function () {
        expect(samplePerson.getLastName()).toBe("Doe");
    });

    it("First name should be Doe by Default", function () {
        expect(samplePerson.getFirstName()).toBe("John");
    });

    it("getFirstName should be a function", function () {
        expect(typeof (samplePerson.getFirstName)).toBe("function");
    });
    it("getLastName should be a function", function () {
        expect(typeof (samplePerson.getLastName)).toBe("function");
    });
    it("setFirstName should be a function", function () {
        expect(typeof (samplePerson.setFirstName)).toBe("function");
    });
    it("setlastName should be a function", function () {
        expect(typeof (samplePerson.setLastName)).toBe("function");
    });
    it("should update the first and last name", function () {
        samplePerson.setFirstName("George");
        samplePerson.setLastName("Hall");
        expect(samplePerson.getFirstName()).toBe("George");
        expect(samplePerson.getLastName()).toBe("Hall");
    });
});
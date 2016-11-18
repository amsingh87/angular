describe("Directive Test samplePerson", function () {
    beforeEach(angular.mock.module('appName'));
    beforeEach(angular.mock.module('testModule'));

    var element, scope;

    beforeEach(inject(function ($rootScope, $compile) {
        element = angular.element("<sample-person-dir></sample-person-dir>");
        scope = $rootScope.$new();
        $compile(element)(scope);
        scope.$digest();
        console.log(element);
    }));

    it("test for header value", function () {
        expect(element.find("h1").html()).toBe("Test for Directive");
    });
    it("test for span value", function () {
        expect(element.find("span").html()).toBe("hello world");
    });

});
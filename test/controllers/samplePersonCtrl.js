describe("test.ctrl", function () {
    //mocking up the application trying to test
    beforeEach(angular.mock.module('appName'));

    var $controller;
    var $scope;

    //before each
    beforeEach(angular.mock.inject(function (_$controller_, $rootScope) {
        $controller = _$controller_;
        $scope = $rootScope.$new();
        var controller = $controller('samplePersonCtrl', {
            $scope: $scope
        });
    }));

    it("has first name as John by default", function () {
        expect($scope.firstName).toEqual('John');
    });
    it("has last name as Doe by default", function () {
        expect($scope.lastName).toEqual('Doe');
    });

})
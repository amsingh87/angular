'use strict';
angular.module("appName")
    .controller("appCtrl", ["$scope", function ($scope) {
        $scope.header = "Hello world";
        $scope.test = function () {
            $scope.header = "Look CHANGED";
        }

        //creating model for person form
        //json object
        $scope.personModel = {
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: ""
        };
        $scope.personModel.firstName = "John";
        $scope.personModel.lastName = "Mcmor";
        $scope.personModel.address = "main";
}]);
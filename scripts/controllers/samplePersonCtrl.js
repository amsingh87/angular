'use strict';
angular.module("appName").controller("samplePersonCtrl", ["samplePerson", "$scope", function (x, $scope) {

    $scope.firstName = x.getFirstName();
    $scope.lastName = x.getLastName();


    $scope.update = function () {
        x.setFirstName("George");
        x.setLastName("Hall");
        console.log(x.getFirstName());
        console.log(x.getLastName());
        /*$scope.firstName = x.getFirstName();
        $scope.lastName = x.getLastName();*/
    }

    $scope.$watch(x.getFirstName, function (newVal, oldVal) {
        if (newVal != oldVal) {
            $scope.firstName = newVal;
        }
    });

    $scope.$watch(x.getLastName, function (newVal, oldVal) {
        if (newVal != oldVal) {
            $scope.lastName = newVal;
        }
    });
    }]);
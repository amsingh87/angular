angular.module("appName").directive("myFrom", function () {
    return {
        restrict: "EAMC",
        controller: function ($scope) {
            $scope.addPerson = function () {
                var personObj = {
                    firstName: $scope.personModel.firstName,
                    lastName: $scope.personModel.lastName,
                    address: $scope.personModel.address,
                    dob: $scope.personModel.dob,
                    phoneNumber: $scope.personModel.phoneNumber,
                    gender: $scope.personModel.gender,
                    car: $scope.personModel.car
                };
                $scope.personArray.push(personObj);
                console.log($scope.personArray);

            }
        },
        templateUrl: "/views/myFrom.html",
        link: function ($scope) {
            console.log("From directive");
        }
    };
});
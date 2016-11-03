'use strict';

angular.module("appName")
    .controller("myFormCtrl", ["$scope", function ($scope) {
        $scope.personModel = {
            firstName: "",
            lastName: "",
            address: "",
            dob: "",
            phoneNumber: "",
            gender: "",
            car: ""
        };

        $scope.personArray = [
            {
                firstName: "Ashley",
                lastName: "Crew",
                phoneNumber: "999-123-1233",
                address: "Dallas lane",
                dob: "12/12/2000",
                gender: "Female",
                car: "Audi"
            }
        ];
        console.log($scope.personArray);

        $scope.myTable = {
                sortBy: 'firstName',
                sortOrder: false,
                toggleOrder: function (name) {
                    if ($scope.myTable.sortBy != name) {
                        $scope.myTable.sortOrder = false;
                        $scope.myTable.sortBy = name;
                    } else {

                        $scope.myTable.sortOrder = !$scope.myTable.sortOrder;
                    }
                }
            }
            /* $scope.personModel.firstName = "John";
            $scope.personModel.lastName = "Doe";
            $scope.personModel.address = "123 main";
            $scope.personModel.dob = "01/01/2000";
            $scope.personModel.phoneNumber = "123-123-1234";
            $scope.personModel.gender = "Male";
            $scope.personModel.car = "Audi";
            */

        $scope.myFrom = {
            addPerson: function () {
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
        }
    }]);
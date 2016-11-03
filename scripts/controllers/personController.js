'use strict';
angular.module("appName")
    .controller("personController", ["$scope", "personService", function ($scope, personService) {
        $scope.test = "sample";
        //creating model for person form
        //json object
        $scope.personModel = {
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: ""
        };


        console.log(personService.getElement(0));
        $scope.personArray = personService.personArray;


        console.log($scope.personArray);

        $scope.forNgShow = true;
        $scope.forNgIf = true;

        $scope.toggleForShow = function () {
                //same as if statement commented below
                $scope.forNgShow = !$scope.forNgShow;
            }
            /* if ($scope.forNgShow) {
                $scope.forNgShow = false;
            } else
                $scope.forNgShow = true;
        }
*/
        $scope.toggleForIf = function () {

                $scope.forNgIf = !$scope.forNgIf;
            }
            /* if ($scope.forNgIf) {
                $scope.forNgIf = false;
            } else
                $scope.forNgIf = true;
        }
*/
        $scope.personModel.firstName = "John";
        $scope.personModel.lastName = "Mcmor";
        $scope.personModel.address = "Main Street";
        $scope.personModel.phoneNumber = "123-123-1233";

        $scope.personTable = {
                sortBy: 'firstName',
                sortOrder: false,
                toggleOrder: function (name) {
                    if ($scope.personTable.sortBy != name) {
                        $scope.personTable.sortOrder = false;
                        $scope.personTable.sortBy = name;
                    } else {

                        $scope.personTable.sortOrder = !$scope.personTable.sortOrder;
                    }
                }
            }
            //defining a function with a json object inside the personform but add 
            /* $scope.personForm = {
                 addPerson = function () {
                     var personObj = {
                         firstName: $scope.personModel.firstName,
                         lastName: $scope.personModel.lastName,
                         address: $scope.personModel.address,
                         phoneNumber: $scope.personModel.phoneNumber
                     };
                     $scope.personArray.push(personObj);
                     console.log($scope.personArray);
                 }
             }*/
            }]);
'use strict';
angular.module("appName")
    .controller("personController", ["$scope", "personService", "personFactory", function ($scope, personService, personFactory) {
        $scope.test = "sample";
        //creating model for person form
        //json object
        $scope.personModel = {
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: ""
        };

        $scope.personModelEdit = {
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: ""
        };

        //personService.getElement(0);
        personService.personObj = $scope.personModel;

        $scope.personArray = [];

        updatePersonList();

        //  console.log($scope.personArray);
        //  console.log(personFactory.getX());

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
            /* $scope.personModel.firstName = "John";
             $scope.personModel.lastName = "Mcmor";
             $scope.personModel.address = "Main Street";
             $scope.personModel.phoneNumber = "123-123-1233";*/

        $scope.personTable = {
            sortBy: 'firstname',
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

        $scope.personForm = {
            addPerson: function () {
                personService.addPerson().then(function (response) {
                    updatePersonList();
                });
            },
            editPerson: personService.retrievePersonList,
            deletePerson: function (id) {
                personService.deletePersonList(id).then(function (response) {
                    updatePersonList();
                });
            },
            edtPerson: function (object) {
                console.log(object);
                $scope.personModelEdit = object;
            },
            updatePerson: function (object) {
                personService.putPersonList(object).then(function () {
                    updatePersonList();
                    //  $scope.personModelEdit = "";
                });
            }
        }


        //Below this is a private functions
        function updatePersonList() {
            //Calling the service to get the person list
            var personListPromise = personService.getPersonList();
            personListPromise.then(function (response) {
                $scope.personArray = response;
            });

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
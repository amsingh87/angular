angular.module("appName").directive("personForm", function () {
    //creating a json object using return
    return {
        restrict: "EAMC", //E-> Element, A-> Attribute, M->Comment, C-> class
        //you can create a function with the follwing object in the personController but you have to assign the controller:personController in the personObj
        //controller: personController,
        controller: 'personController',
        /*controller: function ($scope) {
            $scope.addPerson = function () {
                var personObj = {
                    firstName: $scope.personModel.firstName,
                    lastName: $scope.personModel.lastName,
                    address: $scope.personModel.address,
                    phoneNumber: $scope.personModel.phoneNumber
                };
                $scope.personArray.push(personObj);
                console.log($scope.personArray);

            }
        },*/
        templateUrl: "/views/personForm.html",
        link: function ($scope) {

        }
    };
});
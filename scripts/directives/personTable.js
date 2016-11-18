angular.module("appName").directive("personTable", function () {
    //creating a json object using return
    return {
        restrict: "EAMC", //E-> Element, A-> Attribute, M->Comment, C-> class
        controller: 'personController',
        templateUrl: "/views/personTable.html",
        link: function ($scope) {
            console.log("From directive");
            // console.log($scope.personArray);

        }
    };
});
angular.module("appName").directive("myTable", function () {
    //creating a json object using return
    return {
        restrict: "EAMC", //E-> Element, A-> Attribute, M->Comment, C-> class
        controller: 'myFormCtrl',
        templateUrl: "/views/myTable.html",
        link: function ($scope) {
            console.log("From directive");
            // console.log($scope.personArray);

        }
    };
});
angular.module("appName").directive("grocTable", function () {
    return {
        restrict: "EAC",
        controller: "grocCtrl",
        templateUrl: "/views/grocTable.html"
    };
});
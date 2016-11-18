angular.module("appName").directive("grocForm", function () {
    return {
        restric: "EAC",
        controller: "grocCtrl",
        templateUrl: "/views/grocForm.html"
    };
});
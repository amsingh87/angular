angular.module("appName").directive("sampleHeader", function () {
    //creating a json object using return
    return {
        restrict: "EAMC", //E-> Element, A-> Attribute, M->Comment, C-> class
        template: "<h1> {{header}}</h1>",
        // controller: 'appCtrl',
        /* : function ($scope) {
             $scope.header = "HEAD FROM DIRECTIVE";
             $scope.xyz = 15;
         }*/

        link: function ($scope) {
            $scope.header = "Good morning";

        }
    };
});
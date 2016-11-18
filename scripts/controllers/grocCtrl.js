angular.module("appName").controller("grocCtrl", ["$scope", function ($scope) {
    $scope.grocList = {
        date: "",
        groccery: "",
        quantity: "",
        price: ""
    };

    grocService.grocObj = $scope.grocList;

    $scope.grocArray = [];

    $scope.grocForm = {
        addList: function () {

        }
    }


}]);
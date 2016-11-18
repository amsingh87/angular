angular.module("appName").service("grocService", ['http', function (http) {
    this.grocObj = {
        date: "",
        groccery: "",
        quantity: "",
        price: ""
    }

    var that = this;

    this.addList = addList;

    //get function to get the contents of the database
    this.getList = function () {
        return $http({
            method: "GET",
            url: "/service/groccery"
        }).then(function (result) {
            return result.data
        });
    }

    function addList() {
        var tempObj = {
            date: that.grocObj.date,
            groccery: that.grocObj.groccery,
            quantity: that.grocObj.quantity,
            price: that.grocObj.price
        }
    }

}]);
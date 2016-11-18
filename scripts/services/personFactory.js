angular.module("appName").factory("personFactory", [function () {

    var x = 12;

    return {
        getX: function () {
            return x;
        },

        addPerson: function () {
            var personObj = {
                firstName: $scope.personModel.firstName,
                lastName: $scope.personModel.personObj.lastName,
                address: $scope.personModel.address,
                phoneNumber: $scope.personModel.phoneNumber
            }
            personFactory.personArray.push(personObj);
        },
        personArray: [
            {
                firstName: "Maya",
                lastName: "Sen",
                phoneNumber: "123-123-1233",
                address: "xyz lane"
            },
            {
                firstName: "Dawn",
                lastName: "Wynn",
                phoneNumber: "432-123-1233",
                address: "abc lane"
            },
            {
                firstName: "Jessica",
                lastName: "Hot",
                phoneNumber: "777-123-1233",
                address: "main lane"
            },
            {
                firstName: "Victoria",
                lastName: "Caliente",
                phoneNumber: "888-123-1233",
                address: "belt lane"
            },
            {
                firstName: "Ashley",
                lastName: "Crew",
                phoneNumber: "999-123-1233",
                address: "Dallas lane"
            }
    ],
        getElement: function (index) {
            var length = this.personArray.length;
            if (index < length) {
                console.log(this.personArray[index].firstName);
            }

        }
    }
}]);
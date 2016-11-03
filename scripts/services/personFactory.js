angular.module("appName").factory("personFactory", [function () {
var personObj = {
    firstName: "",
    lastName: "",
    addresss: "",
    phoneNumber: ""
},

return {
    addPerson = function () {
        var personObj = {
            firstName: $scope.personModel.firstName,
            lastName: $scope.personModel.lastName,
            address: $scope.personModel.address,
            phoneNumber: $scope.personModel.phoneNumber
        }
        personFactory.personArray.push(personObj);
    }
}

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
    ];
this.getElement = function (index) {
var length = this.personArray.length;
if (index < length) {
console.log(this.personArray.[index].firstName);
}

}
}]);



}]);
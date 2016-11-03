angular.module("appName").service("personService", [function () {
    this.personArray = [
        {
            firstName: "Maya",
            lastName: "Sen",
            phoneNumber: "123-123-1233",
            address: "xyz lane"
            },
        {
            firstName: "John",
            lastName: "Doe",
            phoneNumber: "432-123-1233",
            address: "abc lane"
            },
        {
            firstName: "Henry",
            lastName: "Mack",
            phoneNumber: "777-123-1233",
            address: "main lane"
            },
        {
            firstName: "Brian",
            lastName: "Lex",
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
            console.log(this.personArray[index].firstName);
        }

    }

    var that = this;

    function addPerson() {
        var temppersonObj = {
            firstName: that.personModel.firstName,
            lastName: that.personModel.lastName,
            address: that.personModel.address,
            phoneNumber: that.personModel.phoneNumber
        }
        that.personArray.push(temppersonObj);
    }
}]);
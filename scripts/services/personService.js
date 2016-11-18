'use strict';
angular.module("appName").service("personService", ['$http', function ($http) {
    this.personObj = {
        firstName: "",
        lastName: "",
        addresss: "",
        phoneNumber: ""
    }

    var that = this;

    this.addPerson = addPerson;
    //  this.editPerson = editPerson;

    //this.personArray = [];

    //return function to get the contents of database by calling the REST api URL 
    this.getPersonList = function () {
        return $http({
            method: "GET",
            url: "/service/person"
        }).then(function (result) {
            // that.personArray = result.data;
            return result.data
        });
    }

    //Insert function to add items in the form
    this.postPersonList = function (dataParam) {
        return $http({
            method: "POST",
            url: "/service/person",
            data: dataParam
        }).then(function (result) {
            return result.status
        });
    }

    //Update fucntion to update and add items in the form
    this.putPersonList = function (dataParam) {
        return $http({
            method: "PUT",
            url: "/service/person/" + dataParam.personinfoid,
            data: dataParam
        }).then(function (result) {
            return result.status
        });
    }

    //edit function to call from REST API
    this.retrievePersonList = function (id) {
        return $http({
            method: "GET",
            url: "/service/person/" + id
        }).then(function (result) {
            return result.data;
            console.log(result.data);
        });
    }

    //delete function to call from REST API
    this.deletePersonList = function (id) {
        return $http({
            method: "DELETE",
            url: "/service/person/" + id
        }).then(function (result) {
            return result.data;
            // console.log(result.data);
        });
    }


    /* this.personArray = [
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
     ];*/
    /* this.getElement = function (index) {
        var length = this.personArray.length;
        if (index < length) {
            console.log(this.personArray[index].firstName);
        }

    }
*/
    this.test = function () {
        console.log("from closure");
        console.log(this.personObj);
    }

    function addPerson() {
        var temppersonObj = {
                firstname: that.personObj.firstName,
                lastname: that.personObj.lastName,
                address: that.personObj.address,
                phone: that.personObj.phoneNumber
            }
            //that.personArray.push(temppersonObj);
        return that.postPersonList(temppersonObj);
    }

}]);
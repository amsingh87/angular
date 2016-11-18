var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('express-myconnection');
var basePath = "/service";

var app = express();

app.use(bodyParser.json()); //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ //to support URL-encoded bodies
    extended: true
}));

//Create sql connection
app.use(connection(mysql, {
    host: 'localhost',
    user: 'personuser',
    password: 'personuser123',
    database: 'persontbl'
}, 'request'));

//creating a json object fot the query , url ans ids for deleteService function to delete the query in sql database
var getDeleteObj = {
    person: {
        query: "DELETE FROM personinfo where personinfoid = ?",
        url: basePath + "/person/:personid",
        ids: ["personid"]
    },
    groccery: {
        query: "DELETE FROM groccerytbl where grocceryid = ?",
        url: basePath + "/groccery/:grocid",
        ids: ["grocid"]
    }
};

//creating a json object for the query, url and ids for putService fucntion to update the query in sql database
var getPutObj = {
    person: {
        query: "UPDATE personinfo SET ? WHERE personinfoid = ?",
        url: basePath + "/person/:personid",
        ids: ["personid"]
    },
    groccery: {
        query: "UPDATE groccerytbl SET ? WHERE grocceryid = ?",
        url: basePath + "/groccery/:grocid",
        ids: ["grocid"]
    }
};

//creating json object for the query, url and ids for postService function to insert the new query into the sql database 
var getPostObj = {
    person: {
        query: "INSERT into personinfo set ?",
        url: basePath + "/person",
        ids: []
    },
    groccery: {
        query: "INSERT into groccerytbl set ?",
        url: basePath + "/groccery",
        ids: []
    }
};


//creating json object for the query, url and ids  for getService function to display the contents of the person and account table from sql database
var getServiceObj = {
    person: {
        query: "SELECT * FROM personinfo",
        url: basePath + "/person",
        ids: []
    },
    groccery: {
        query: "SELECT * FROM groccerytbl",
        url: basePath + "/groccery",
        ids: []
    },
    personAccount: {
        query: "SELECT * FROM personinfo a INNER JOIN account b on b.personid = a.personinfoid WHERE a.personinfoid=?",
        url: basePath + "/person/:personid/account",
        ids: ["personid"]
    }

};

//creating a  json object to get the sql query for paricular table with id provided at the url
var getServiceByIdObj = {
    person: {
        query: "SELECT * FROM personinfo where personinfoid=?",
        url: basePath + "/person/:personid",
        ids: ["personid"]
    },
    groccery: {
        query: "SELECT * FROM groccerytbl where grocceryid=?",
        url: basePath + "/groccery/:grocid",
        ids: ["grocid"]
    }
};


//creating a variable for personinfo while providing particular id at the  url
/*var url = basePath + "/person/:personid";
var query = "SELECT * from personinfo where personinfoid =?";
var ids = ["personid"];*/

//loop to create a url, ids and query of person and account table
for (var key in getServiceObj) {
    getService(getServiceObj[key].url, getServiceObj[key].ids, getServiceObj[key].query);
}

//loop for get service 
for (var key in getServiceByIdObj) {
    getService(getServiceByIdObj[key].url, getServiceByIdObj[key].ids, getServiceByIdObj[key].query);
}
//loop for post Service
for (var key in getPostObj) {
    postService(getPostObj[key].url, getPostObj[key].ids, getPostObj[key].query);
}

//loop for put service 
for (var key in getPutObj) {
    putService(getPutObj[key].url, getPutObj[key].ids, getPutObj[key].query);
}

//loop for delete service 
for (var key in getDeleteObj) {
    deleteService(getDeleteObj[key].url, getDeleteObj[key].ids, getDeleteObj[key].query);
}

//Get service function for REST API
function getService(url, ids, query) {
    app.get(url, function (req, res, next) {
        //var query = "SELECT * FROM personinfo";
        req.getConnection(function (err, connection) {
            if (err) return next(err);

            connection.query(query, req.params[ids], function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql error, check getService query");
                }
                res.json(results);
            });
        });
    });
}

//post service function for REST API
function postService(url, ids, query) {
    app.post(url, function (req, res, next) {
        // var reqObj = req.body;
        req.getConnection(function (err, connection) {
            if (err) return next(err);

            connection.query(query, req.body, function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql error, check postService query");
                }
                res.json(results);
            });
        });
    });
}

//update function for REST API 
function putService(url, ids, query) {
    app.put(url, function (req, res, next) {
        var id = req.params[ids];
        var reqObj = req.body;
        req.getConnection(function (err, connection) {
            if (err) return next(err);

            connection.query(query, [reqObj, id], function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql error, check putService query");
                }
                res.json(results);
            });
        });
    });
}

//delete function for REST API
function deleteService(url, ids, query) {
    app.delete(url, function (req, res, next) {
        req.getConnection(function (err, connection) {
            if (err) return next(err);
            connection.query(query, req.params[ids], function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql error, check deleteService query");
                }
                res.json(results);
            });
        });
    });
}

//creating as a function and  using it in a function
/*
var query = "SELECT * FROM personinfo";
var ids = [];
var url = basePath + "/person";
getService(url, ids, query);

var query = "SELECT * FROM account";
var ids = [];
var url = basePath + "/account";
getService(url, ids, query);
*/

//http: calling the app.get function to call the query from sql ad 
/*app.get('/service/, function (req, res, next) {
    var ids = [];
    var query = "SELECT * FROM personinfo";
    req.getConnection(function (err, connection) {
        if (err) return next(err);

        connection.query(query, ids, function (err, results) {
            if (err) {
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);
        });
    });
});*/
//host static files
app.use(express.static(__dirname + '/'));

app.get('/contact', function (req, res) {
    res.redirect('/views/index2.html');
});

app.get('/landing/person', function (req, res) {
    res.send('This is person from landing');
});

app.listen(3000, function (req, res) {
    console.log('Listening to the port 3000');
});
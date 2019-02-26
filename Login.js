const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require('cors');
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "arulyan",
    password: "lib",
    database: "LibDataBase"
})
//Student Portal Password check
app.post("/pass", (req, res) => {
    const user = req.body.regno;
    const pass = req.body.password;
    var sql = 'select * from passtable where (Reg) = ("' + user + '")';
    connection.query(sql, (err, result) => {
        if (result[0] != null && result[0].Password == pass) {
            res.json(result);
            console.log(result);
        }
        else {
            console.log(err);
            res.json({
                success: false,
                status: 400
            })
        }
    })
})
//student signup!
app.post("/signup", (req, res) => {
    const users = req.body.regnos;
    const passers = req.body.passwords;
    let sqlQuery = 'select Reg from passtable where (Reg)=("' + users + '")';
    connection.query(sqlQuery, function (error, results) {
        if (error) {
            callback(error);
            return;
        }
        if (results.length) {
            console.log("Username Already Exists");
            res.json({
                success: false,
                status: 300
            })
        }
        else {
            var b = 'insert into passtable (Reg,Password) values ("' + users + '","' + passers + '")';
            connection.query(b, (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        status: 400
                    })
                }
                else {

                    res.json({
                        success: true,
                        status: 200
                    })
                    console.log("DATA INSERTED");
                }
            })
        }
    })
})
//admin portal student info search
app.post("/adminin",(req,res)=>{
    const reg=req.body.reg1;
    const name=req.body.name1;
    let sqlQuery = 'select Id,Name from stutable where (Id)=("' + reg + '")';
    connection.query(sqlQuery, function (error, results) {
        if (error) {
            callback(error);
            return;
        }
        if (results.length) {
            console.log("Username Exists");
            res.json({
                success: true,
                status: 200
            })
        }
        else {
            console.log("User is new!")
            var b = 'insert into stutable (Id,Name) values ("' + reg + '","' + name + '")';
            connection.query(b, (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        status: 400
                    })
                }
                else {
                    res.json({
                        success: true,
                        status: 200
                    })
                    console.log("DATA INSERTED");
                }
            })
        }
    })
})

//Student Portal after login info
app.get("/lib", (req, res) => {
    var a = "select * from stutable";
    connection.query(a, (err, rows) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                status: 400
            })
        }
        else {
            console.log(rows);
            res.json(rows);   //sends the json object to the client
        }
    })
})

//Adding Book1 in Student Database
app.post("/stubook1",(req,res)=>{
    const user = req.body.ide;
    const pass = req.body.boo1;
    const is1 = req.body.issu1;
    const d1 = req.body.du1;
    var sql = 'select * from stutable where (Id) = ("' + user + '")';
    connection.query(sql, (err, result) => {
        if (result[0] != null && result[0].Book1 == '') {
            console.log("entering book 1");
            var f='update stutable set Book1="'+pass+'",Issue1="'+is1+'",Due1="'+d1+'" where Id="'+user+'"';
            connection.query(f, (err, rows) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        status: 400
                    })
                }
                else {
                    res.json({
                        success: true,
                        status: 200
                    })
                    console.log("DATA INSERTED");
                }
            })

        }
        else {
            console.log(result[0].Book2)//THIS IS PRINTING
            console.log("Book already exist in slot one");
            res.json({
                success: false,
                status: 300
            })
        }
    })

})

//Adding Book2 in Student Database
app.post("/stubook2",(req,res)=>{
    const user = req.body.ide;
    const pass = req.body.boo2;
    const is2 = req.body.issu2;
    const d2 = req.body.du2;
    var sql = 'select * from stutable where (Id) = ("' + user + '")';
    connection.query(sql, (err, result) => {
        if (result[0] != null && result[0].Book2 == '') {
            console.log("entering book 2");
            var f='update stutable set Book2="'+pass+'",Issue2="'+is2+'",Due2="'+d2+'" where Id="'+user+'"';
            connection.query(f, (err, rows) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        status: 400
                    })
                }
                else {
                    res.json({
                        success: true,
                        status: 200
                    })
                    console.log("DATA INSERTED");
                }
            })

        }
        else {
            console.log(result[0].Book2)//THIS IS PRINTING
            console.log("Book already exist in slot TWO");
            res.json({
                success: false,
                status: 300
            })
        }
    })

})

//Adding Book3 in Student Database
app.post("/stubook3",(req,res)=>{
    const user = req.body.ide;
    const pass = req.body.boo3;
    const is3 = req.body.issu3;
    const d3 = req.body.du3;
    var sql = 'select * from stutable where (Id) = ("' + user + '")';
    connection.query(sql, (err, result) => {
        if (result[0] != null && result[0].Book3 == '') {
            console.log("entering book 3");
            var f='update stutable set Book3="'+pass+'",Issue3="'+is3+'",Due3="'+d3+'" where Id="'+user+'"';
            connection.query(f, (err, rows) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        status: 400
                    })
                }
                else {
                    res.json({
                        success: true,
                        status: 200
                    })
                    console.log("DATA INSERTED");
                }
            })

        }
        else {
            console.log(result[0].Book2)//THIS IS PRINTING
            console.log("Book already exist in slot three");
            res.json({
                success: false,
                status: 300
            })
        }
    })

})

//Checking if the Book slot 1 of student is empty
app.post("/checker1",(req,res)=>{
    const user = req.body.ide;
    var sql='select * from stutable where (Id) = ("' + user + '")';
    connection.query(sql, (err, result) => {
        if (result[0] != null && result[0].Book1 != '') {
            console.log("Book Already exists");
            res.json({
                success:true,
                status:300
            })
        }
    })
})

//Checking if the Book slot 2 of student is empty
app.post("/checker2",(req,res)=>{
    const user = req.body.ide;
    var sql='select * from stutable where (Id) = ("' + user + '")';
    connection.query(sql, (err, result) => {
        if (result[0] != null && result[0].Book2 != '') {
            console.log("Book Already exists");
            res.json({
                success:true,
                status:300
            })
        }
    })
})

//Checking if the Book slot 3 of student is empty
app.post("/checker3",(req,res)=>{
    const user = req.body.ide;
    var sql='select * from stutable where (Id) = ("' + user + '")';
    connection.query(sql, (err, result) => {
        if (result[0] != null && result[0].Book3 != '') {
            console.log("Book Already exists");
            res.json({
                success:true,
                status:300
            })
        }
    })
})

//Deleting Book1 from Data base when student retruns the book 
app.post("/delete1",(req,res)=>{
    const user = req.body.ide;
    var sql = 'update stutable set Book1="",Issue1="",Due1="" where Id="'+user+'"';
    connection.query(sql,(err,result)=>{
        if (err) {
            console.log(err);
            res.json({
                success: false,
                status: 400
            })
        }
        else {
            res.json({
                success: true,
                status: 200
            })
            console.log("DATA 1 Deleted");
        }
    })
})

app.post("/delete2",(req,res)=>{
    const user = req.body.ide;
    var sql = 'update stutable set Book2="",Issue2="",Due2="" where Id="'+user+'"';
    connection.query(sql,(err,result)=>{
        if (err) {
            console.log(err);
            res.json({
                success: false,
                status: 400
            })
        }
        else {
            res.json({
                success: true,
                status: 200
            })
            console.log("DATA 2 Deleted");
        }
    })
})

app.post("/delete3",(req,res)=>{
    const user = req.body.ide;
    var sql = 'update stutable set Book3="",Issue3="",Due3="" where Id="'+user+'"';
    connection.query(sql,(err,result)=>{
        if (err) {
            console.log(err);
            res.json({
                success: false,
                status: 400
            })
        }
        else {
            res.json({
                success: true,
                status: 200
            })
            console.log("DATA Deleted");
        }
    })
})


app.listen(process.env.PORT || 8050);
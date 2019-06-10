var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  managersView();
});

function managersView() {
    console.log("****************************************");
    console.log("****************************************");
    console.log("****************************************");
    console.log("****************************************");
    inquirer
    .prompt([
        {
          type: "list",
          message: "What would you like to do",
          name: "managerViewAction",
          choices: ["Check products for sale", "View low inventory", "Add to inventory", "Add new item"]
        },
        {
          type: "confirm",
          message: "Are you sure?",
          name: "confirm",
          default: true
        }
      ])
  
      .then(function (inquirerResponse) {
        if (inquirerResponse.confirm && inquirerResponse.managerViewAction[0]) {
            connection.query("SELECT * FROM products", function (err, res) {
                if (err) throw err;
                for (var i = 0; i < res.length; i++) {
                  if (res[i].department_name === "Computer Accessories") {
                    console.log("*****************************");
                    console.log("Item ID: " + res[i].item_id);
                    console.log("Product name: " + res[i].product_name);
                    console.log("Product department: " + res[i].department_name);
                    console.log("Product price: " + res[i].price);
                    console.log("Product quantity: " + res[i].stock_quantity);
                  } if (res[i].department_name === "Electronics") {
                    console.log("*****************************");
                    console.log("Item ID: " + res[i].item_id);
                    console.log("Product name: " + res[i].product_name);
                    console.log("Product department: " + res[i].department_name);
                    console.log("Product price: " + res[i].price);
                    console.log("Product quantity: " + res[i].stock_quantity);
                  } if (res[i].department_name === "Kitchen") {
                    console.log("*****************************");
                    console.log("Item ID: " + res[i].item_id);
                    console.log("Product name: " + res[i].product_name);
                    console.log("Product department: " + res[i].department_name);
                    console.log("Product price: " + res[i].price);
                    console.log("Product quantity: " + res[i].stock_quantity);
                  } if (res[i].department_name === "Pet Care") {
                    console.log("*****************************");
                    console.log("Item ID: " + res[i].item_id);
                    console.log("Product name: " + res[i].product_name);
                    console.log("Product department: " + res[i].department_name);
                    console.log("Product price: " + res[i].price);
                    console.log("Product quantity: " + res[i].stock_quantity);
                  } if (res[i].department_name === "Tools") {
                    console.log("*****************************");
                    console.log("Item ID: " + res[i].item_id);
                    console.log("Product name: " + res[i].product_name);
                    console.log("Product department: " + res[i].department_name);
                    console.log("Product price: " + res[i].price);
                    console.log("Product quantity: " + res[i].stock_quantity);
                  } if (res[i].department_name === "Mens Clothing") {
                    console.log("*****************************");
                    console.log("Item ID: " + res[i].item_id);
                    console.log("Product name: " + res[i].product_name);
                    console.log("Product department: " + res[i].department_name);
                    console.log("Product price: " + res[i].price);
                    console.log("Product quantity: " + res[i].stock_quantity);
                  } if (res[i].department_name === "Womens Clothing") {
                    console.log("*****************************");
                    console.log("Item ID: " + res[i].item_id);
                    console.log("Product name: " + res[i].product_name);
                    console.log("Product department: " + res[i].department_name);
                    console.log("Product price: " + res[i].price);
                    console.log("Product quantity: " + res[i].stock_quantity);
                  }
                }
                managersView();
              });

        } if(inquirerResponse.confirm && inquirerResponse.managerViewAction[1]){
            connection.query("SELECT * FROM products", function (err, res) {
                if (err) throw err;
                for (var i = 0; i < res.length; i++) {
                    if(res[i].stock_quantity > 5){
                    console.log("*****************************");
                    console.log("Item ID: " + res[i].item_id);
                    console.log("Product name: " + res[i].product_name);
                    console.log("Product quantity: " + res[i].stock_quantity);
                    } else {
                        console.log("All stock over 5 quantity.");
                    }
                } 
        });
    }
        else {
          console.log("Why you gotta be so rude?!");
          connection.end();
        }
      });
  
  }
  
  
  
  
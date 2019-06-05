var mysql = require("mysql");
var inquirer = require ("inquirer");

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
    view();
});

function view() {
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
        shoppingTime();
    });

}

function shoppingTime (){

    inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Please enter the ID # of the product youd like to purchase.",
      name: "productSelection"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "input",
      message: "How many?",
      name: "productQuantity"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])

  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
        console.log("Excellent you want: " + inquirerResponse.productSelection)
        console.log("With a quantity of: " + inquirerResponse.productQuantity)
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });

  connection.end();

}




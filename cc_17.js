// Task 1: Create a Customer Class

// creates a class that logs customer details
class Customer {
    //uses name, email, and tracks purchase history
    constructor(name,email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    };

    // adds a methods that will add each purchase to the empty string
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    };

    // adds up all of the purchase amount and returns the total amount
    getTotalSpent() {
        const totalAmount = this.purchaseHistory.reduce((sum, purchase) => sum + purchase, 0);
        //console.log(`Total Amount Spent: $${totalAmount}`);
        return totalAmount;
    };
};

// Task 2: Create a SalesRep Class

// creates a class that will make a client list and give the total amount spent from each client
class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    };

    // uses a method to add clients to the array
    addClient(customer) {
        this.clients.push(customer);
    };

    // uses a method to get
    getClientTotal(name) {
        // uses find to find the exact name
        const clientName = this.clients.find(client => client.name === name);

        // uses previous methods and logs the output in the console
        const totalSpentByClient = clientName.getTotalSpent();
        console.log(`Total spent by ${name}: $${totalSpentByClient}`);
    };
};

// Task 1 - test data
const customer1 = new Customer('Cade Cunningham', 'ccunningham@gmail.com');
customer1.addPurchase(15);
console.log(`Total Amount Spent: $${customer1.getTotalSpent()}`);

// Task 2 - test data
const salesRep1 = new SalesRep('Travis Hunter');
salesRep1.addClient(customer1);
salesRep1.getClientTotal('Cade Cunningham');
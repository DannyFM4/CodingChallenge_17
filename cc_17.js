// Task 1: Create a Customer Class

// creates a class that logs customer details
class Customer {
    //uses name, email, and tracks purchase history
    constructor(name,email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
        console.log(`Customer name: ${this.name}, Customer email: ${this.email}`)
    };

    // adds a methods that will add each purchase to the empty string
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    };

    // adds up all of the purchase amount and returns the total amount
    getTotalSpent() {
        const totalAmount = this.purchaseHistory.reduce((sum, purchase) => sum + purchase, 0);
        
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

        // uses if statement and previous methods then logs the output in the console
        if (clientName) {
            const totalSpentByClient = clientName.getTotalSpent();
            console.log(`Total spent by ${name}: $${totalSpentByClient.toFixed(2)}`);
        }
    };

    // creates method to make a report of the clients
    reportOfClients() {
        // creates a variable, assigns value of total revenue, then logs in console
        const totalRev = this.clients.reduce((sum, client) => sum + client.getTotalSpent(), 0);
        console.log(`Total revenue from all of the clients: $${totalRev.toFixed(2)}`);

        // big spending clients variable and log
        const bigSpendingClients = this.clients.filter(client => client.getTotalSpent() > 500);
        console.log('High Rollers:', bigSpendingClients.map(client => client.name));

        // creates a client summary and logs it in the console
        const customerSummary = this.clients.map(client => ({
            name: client.name,
            email: client.email,
            totalSpent: client.getTotalSpent().toFixed(0)
        }));
        console.log('Customer Details:', customerSummary);
    }
};


// Task 3: Create a VIPCustomer Class (extends Customer)

// creates a vip customer class that extends properties from the customer class
class VIPCustomer extends Customer {
    // takes customer class features and adds vip level that can only be gold or platinum
    constructor(name, email, vipLevel=["Gold","Platinum"]) {
        super(name, email);
        this.vipLevel = vipLevel;
    };

    // creates a method in the class that calculates the VIP customer bonus
    getTotalSpent() {
        const total = super.getTotalSpent();
        const totalWithBonus = total * 1.1;

        return totalWithBonus;
    };
}


// Test Data (below)
// Task 1 - test data
const customer1 = new Customer('Cade Cunningham', 'ccunningham@gmail.com');
customer1.addPurchase(15);
console.log(`Total Amount Spent: $${customer1.getTotalSpent()}`);

const customer2 = new Customer('Tommy Devito', 'tommy2shoes@gmail.com');
customer2.addPurchase(50);
customer2.addPurchase(20);
console.log(`Total Amount Spent: $${customer2.getTotalSpent()}`);

const customer3 = new Customer('Malik Nabers', 'leeknabers@gmail.com');
customer3.addPurchase(100);
customer3.addPurchase(40);
console.log(`Total Amount Spent: $${customer3.getTotalSpent()}`);

// Task 3 - test data
const vipCustomer1 = new VIPCustomer('Lebron James', 'bronbron24@gmail.com', 'Gold');
vipCustomer1.addPurchase(2000);
console.log(`Total Spent by VIP With Loyalty Bonus: $${vipCustomer1.getTotalSpent().toFixed(2)}`);


const vipCustomer2 = new VIPCustomer('Jameis Winston', 'winstonj22@gmail.com', 'Platinum');
vipCustomer2.addPurchase(1500);
vipCustomer2.addPurchase(250);
console.log(`Total Spent by VIP With Loyalty Bonus: $${vipCustomer2.getTotalSpent().toFixed(2)}`);


// Task 2 - test data
const salesRep1 = new SalesRep('Travis Hunter');
salesRep1.addClient(customer1);
salesRep1.getClientTotal('Cade Cunningham');

salesRep1.addClient(customer2)
salesRep1.getClientTotal('Tommy Devito');

salesRep1.addClient(vipCustomer1);
salesRep1.getClientTotal('Lebron James');

salesRep1.addClient(vipCustomer2);
salesRep1.getClientTotal('Jameis Winston');



// Task 4 - data
salesRep1.reportOfClients()
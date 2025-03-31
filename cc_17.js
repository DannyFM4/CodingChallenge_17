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
        // const totalSpentByClient = clientName.getTotalSpent();
        // console.log(`Total spent by ${name}: $${totalSpentByClient}`);
        if (clientName) {
            const totalSpentByClient = clientName.getTotalSpent();
            console.log(`Total spent by ${name}: $${totalSpentByClient.toFixed(2)}`);
        }
    };

    reportOfClients() {
        const totalRev = this.clients.reduce((sum, client) => sum + client.getTotalSpent(), 0);
        console.log(`Total revenue from all of the clients: $${totalRev.toFixed(2)}`);

        const bigSpendingClients = this.clients.filter(client => client.getTotalSpent() > 500);
        console.log('High Rollers:', bigSpendingClients.map(client => client.name));

        const customerSummary = this.clients.map(client => ({
            name: client.name,
            email: client.email,
            totalSpent: client.getTotalSpent().toFixed(0)
        }));
        console.log('Customer Details:', customerSummary);
    }
};

// Task 3 - 
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
    };

    getTotalSpent() {
        const total = super.getTotalSpent();
        const totalWithBonus = total * 1.1;

        //console.log(`Total Spent by VIP With Loyalty Bonus: $${totalWithBonus.toFixed(0)}`);
        return totalWithBonus;
    };
}


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
vipCustomer1.getTotalSpent();

const vipCustomer2 = new VIPCustomer('Jameis Winston', 'winstonj22@gmail.com', 'Platinum');
vipCustomer2.addPurchase(1500);
vipCustomer2.addPurchase(250);
console.log(`Total Spent by VIP With Loyalty Bonus: $${vipCustomer2.getTotalSpent().toFixed(2)}`);
//vipCustomer2.getTotalSpent();

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
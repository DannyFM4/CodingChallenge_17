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
        console.log(`Total Amount Spent: $${totalAmount}`);
        return totalAmount;
    };
};

// Task 1 - test data
const customer1 = new Customer('Cade Cunningham', 'ccunningham@gmail.com');
customer1.addPurchase(15);
customer1.getTotalSpent();
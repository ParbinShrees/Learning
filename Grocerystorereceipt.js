// ============================================
// 🏪 Grocery Store Receipt
// Learning Variables + Arrays + Loops +
// map() + filter() + reduce()
// ============================================



// ======================================================
// PART 1 : Using Arrays + for Loop
// ======================================================

// Array of item names
const items = ["Milk", "Bread", "Eggs", "Coffee", "Butter"];

// Array of prices (same order as items)
const prices = [2.5, 1.8, 3.2, 6.0, 4.4];

// Variable to store total price
let total = 0;

// Variable to count items costing more than $3
let overThree = 0;

// Assume first item is the most expensive
let mostExpensive = items[0];
let highestPrice = prices[0];

console.log("========== PART 1 ==========");

// Loop through every item
for (let i = 0; i < items.length; i++) {

    // Print item and price
    console.log(items[i] + " - $" + prices[i].toFixed(2));

    // Add price to total
    total = total + prices[i];

    // Count items over $3
    if (prices[i] > 3) {
        overThree++;
    }

    // Find most expensive item
    if (prices[i] > highestPrice) {
        highestPrice = prices[i];
        mostExpensive = items[i];
    }
}

console.log("-------------------------");
console.log("Total: $" + total.toFixed(2));
console.log("Items over $3.00: " + overThree);
console.log("Most expensive: " + mostExpensive);



// ======================================================
// PART 2 : Using map(), filter(), reduce()
// ======================================================

console.log("\n========== PART 2 ==========");

// Array of objects
const cart = [
    { name: "Milk", price: 2.5 },
    { name: "Bread", price: 1.8 },
    { name: "Eggs", price: 3.2 },
    { name: "Coffee", price: 6.0 },
    { name: "Butter", price: 4.4 }
];


// ---------------------------
// map()
// ---------------------------

// Create receipt lines
const receipt = cart.map(item => {
    return item.name + " - $" + item.price.toFixed(2);
});

// Print each receipt line
receipt.forEach(line => {
    console.log(line);
});


// ---------------------------
// reduce()
// ---------------------------

// Calculate total
const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price;
}, 0);

console.log("-------------------------");
console.log("Total: $" + totalPrice.toFixed(2));


// ---------------------------
// filter()
// ---------------------------

// Items costing more than $3
const expensiveItems = cart.filter(item => {
    return item.price > 3;
});

console.log("Items over $3.00: " + expensiveItems.length);


// ---------------------------
// Bonus : 10% Discount
// ---------------------------

// Create a NEW array with discounted prices
const discountCart = cart.map(item => {
    return {
        name: item.name,
        price: item.price * 0.9
    };
});

// Calculate new total
const discountTotal = discountCart.reduce((sum, item) => {
    return sum + item.price;
}, 0);

console.log("Total after 10% off: $" + discountTotal.toFixed(2));



// ======================================================
// PART 3 : forEach(), for...of, for...in
// ======================================================

console.log("\n========== PART 3 ==========");


// ---------------------------
// forEach()
// ---------------------------

cart.forEach((item, index) => {
    console.log((index + 1) + ". " + item.name + " - $" + item.price.toFixed(2));
});


// ---------------------------
// for...of
// ---------------------------

let sum = 0;

for (const item of cart) {
    sum = sum + item.price;
}

console.log("-------------------------");
console.log("Total: $" + sum.toFixed(2));


// ---------------------------
// for...in
// ---------------------------

// Take first object
const firstItem = cart[0];

console.log("-------------------------");

// Print keys and values
for (const key in firstItem) {
    console.log(key + ": " + firstItem[key]);
}
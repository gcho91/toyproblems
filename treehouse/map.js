const fruits = ['apple', 'pear', 'cherry'];

const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(capitalizedFruits); //APPLE, PEAR, CHERRY

//how is map and foreach different? Stack Overflow: https://stackoverflow.com/questions/34426458/js-learning-difference-between-foreach-and-map

//forEach: "executes a provided function once per array element"
//map: "creates a new array with the results of calling a provided function on every element in this array"

//"So, forEach doesn’t actually return anything. It just calls the function for each array element and then it’s done. So whatever you return within that called function is simply discarded.

// On the other hand, map will similarly call the function for each array element but instead of discarding its return value, it will capture it and build a new array of those return values."


const prices = [5, 4.23, 6.4, 8.09, 3.20];

    // Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]
const displayPrices = prices.map(price => `$${price.toFixed(2)}`);
//ES6 - save in a const and display. template literal
console.log(displayPrices)

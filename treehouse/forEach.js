// Using forEach, capitalize all the strings in the months array and store them in the array capitalizedMonths.



const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];

// filteredColors should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
// Write your code below
months.forEach(month => capitalizedMonths.push(month.toUpperCase()));

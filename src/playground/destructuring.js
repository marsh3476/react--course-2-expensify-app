

// const person = {
//   age: 30,
//   location: {
//     city: 'Philadelphia',
//     temp: 88
//   }
// };

// const { name2='Anonymous', age } = person;

// console.log(`${name2} is ${age}`);

// const { city, temp: temperature } = person.location;


// if (city && temperature) {
//   console.log(`it's ${temperature} in ${city}`)
// }





////////////////////////// ABOVE: object destructuring, BELOW: for arrays



// const address = [
//   '1299 S Juniper Street', 'Philadelphia', 'Pennsynvalnia'
// ];
// const [ , city, state ] = address;
// console.log(`Youa re in ${city} ${state}`)


const item = ['coffee (cold)', '2', '8.5', '2.75'];
const [ itemName, , mediumPrice ] = item;

console.log(`A medim ${itemName} costs ${mediumPrice} `);


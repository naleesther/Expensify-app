//Object destructuring.



// const person = {
//     name : 'Nalenyi',
//     age: 20,
//     location: {
//         city: 'Nairobi',
//         temp: 25
//     }
// };
// const { name: firstName ='Anonymous' , age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city ,temp:temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'

//     }
// };
// const { name:publisherName = 'self-published'} = book.publisher;

// console.log(publisherName);


//Array destructing

const item =['Coffee (iced)','$2.00','$3.50','$3.75'];
const [itemName,,mediumPrice] = item;

console.log(`A medium Coffee (hot) ${itemName} costs ${mediumPrice}`);
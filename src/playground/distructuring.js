const person = {
    name: 'Anderson',
    age: 31,
    location: {
        city: 'Phily',
        temp: 92
    }
};
const { name = 'Anonymous', age } = person;
const { city, temp: temperature } = person.location;
console.log(`${name} is ${age}`);
console.log(`${temperature} in ${city}`);


const address = ['356 Evergreen', 'Springfield', 'We doesn´t know', '19878'];

const [street, city1 = 'none', state, zip] = address;
const [street1,  ,  , zip1] = address;

console.log(`You are un ${city1} ${state} and ${zip1}`)
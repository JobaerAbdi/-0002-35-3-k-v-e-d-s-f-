const data = {
    id : 1248,
    name : 'KWE',
    isCorrect : true,
    location : 'Nepal'
};

// const keys = Object.keys(data);
// console.log(keys);   // [ 'id', 'name', 'isCorrect', 'location' ]

// const values = Object.values(data);
// console.log(values);  // [ 1248, 'KWE', true, 'Nepal' ]

// const entries = Object.entries(data);
// console.log(entries);  // [[ 'id', 1248 ],[ 'name', 'KWE' ],[ 'isCorrect', true ],[ 'location', 'Nepal' ]]

//---------------------------------------------------------------------------------------------------------

console.log(data);  // { id: 1248, name: 'KWE', isCorrect: true, location: 'Nepal' }
delete data.name;
console.log(data);  // { id: 1248, isCorrect: true, location: 'Nepal' }
Object.seal(data);  // Only change values, Others no changes no delete or no new entries.
Object.freeze(data); // Everything freeze.
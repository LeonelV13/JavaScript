const deserializado = {"variable1" : "PEDRO","variable2" : "JORGE"};

const serializado = JSON.stringify(deserializado);

console.log(typeof serializado);

const serializado1 = {"variable3" : "MARTIN","variable4" : "LEONEL"};
const deserializado1 = JSON.parse(serializado1);

console.log(typeof deserializado1);
console.log(deserializado1);
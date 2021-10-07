const array =[1, 3, 5, 3, 7, 3, 1, 1, 5];
const distinct = (arr) =>{

const mySet = new Set(arr);

console.log(Array.from(mySet));
}

distinct(array);
const forwardMultipleOfThreeArray = [];


// helper function
const reverser = arr => {
    const array = [];
    // reversing the array
    for(let i = arr.length - 1; i >= 0; i--) {
        array.push(arr[i]);
    }

    return array;
}

// populating our array in line 1.
for(let i = 1; i<=100; i++ ){
    if(i % 3 === 0)
        forwardMultipleOfThreeArray.push(i);
}

// reversing our array using our helper function
const ourReversedArray = reverser(forwardMultipleOfThreeArray);

console.log(forwardMultipleOfThreeArray);
console.log('\nNew Array')
console.log(ourReversedArray);



 


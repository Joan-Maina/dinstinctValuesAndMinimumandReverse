const arr = [1, 3, 5, 3, 7, 3, 1, 1, 5,'joan'];

const minimumItem = (array) => {
    let minValue = Infinity;

   // loop through the array of values
   for( i = 0; i < array.length; i++){

     if(typeof array[i] === 'number') {
       // console.log(array);
         if(array[i] < minValue) {
             minValue = array[i];
             console.log(minValue);
         }
     }
   }
}

minimumItem(arr);
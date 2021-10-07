const reverseSentence = (sentence) =>{
//normal way
    // var splitWords = sentence.split(" ");

    // var reversed = splitWords.reverse();

    // var joined = reversed.join(" ");
    
//shorthand    
    var joined = sentence.split(" ").reverse().join(" ");

    console.log(joined);
}

reverseSentence('bob likes dogs');
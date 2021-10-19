const reverseSentence = (sentence) =>{
//normal way
    // let splitWords = sentence.split(" ");
    // console.log(splitWords)
    // let reversed = splitWords.reverse();
    //  console.log(reversed)
    // let joined = reversed.join(" ");
    // console.log(joined);
    
//shorthand    
    let joined = sentence.split(" ").reverse().join(" ");

    console.log(joined);
}

reverseSentence('bob likes dogs');
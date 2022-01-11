var num;
for(num=1; num<100; num++){
    if ((num%3)==0)
    // console.log("fizz")
    // else(console.log(num));
    document.write("<br>"+"fizz")
    else if((num%5)==0) document.write("<br>" + "buzz");
    else( document.write("<br>" +num));
}

// 1 answer

function giveMeSomething (text){
    return ("something" + text);
}
console.log(giveMeSomething(" is better than nothing"));
console.log(giveMeSomething(" Bob Jane"));
console.log( giveMeSomething(" something"));

//2 answer

function newWord(text){
  return (text.substr(1));
}
console.log(newWord("apple"));
console.log(newWord("cherry"));
console.log(newWord("plum"));


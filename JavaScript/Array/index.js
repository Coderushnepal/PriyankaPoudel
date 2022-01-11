//1 answer

function arrayValuesTypes(myarray) {
    newArray = [];
    for(let i=0; i<myarray.length; i++){
        newArray.push(typeof(myarray[i]));
    }
    return newArray;
}

// console.log(arrayValuesTypes([1, 2, "null", []]));

// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));

// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));

//2 answer


function filterArray(myarray) {
    newArray = [];
    for (let i=0; i<myarray.length; i++) {
        if (!(typeof(myarray[i]) === "string")) {
            newArray.push(myarray[i]);
        }
    }
    return newArray;
}

console.log(filterArray([1, 2, "a", "b"]));

console.log(filterArray([1, "a", "b", 0, 15]));

console.log(filterArray([1, 2, "aasf", "1", "123", 123]));
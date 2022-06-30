let test =0
console.log("test avant",test);

function getTest() {
    test = 5
    console.log("test dedans",test);
    return test
}
getTest();

console.log("test apres",test);
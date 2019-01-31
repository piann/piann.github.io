function combineArr(arr) {
    return new Array(1 << arr.length).fill().map(
        (e1,i) => arr.filter((e2, j) => i & 1 << j));
}

function combineTotal(arr) {
    return combineArr(arr).filter(a => a.length >=1);
}
function calc(){
    
var rawNumbers= document.getElementById('inputNumbers').value
var iWantThis = parseFloat(document.getElementById('wantedNumber').value)

console.log(rawNumbers);
console.log(iWantThis);

var numbers = rawNumbers.split(",").map(Number);

//var numbers = [15.68, 15.83, 14.95, 16.53, 15.94, 15.97, 16.33, 15.39, 16.48, 16.19]
//var iWantThis = 16.53;
var refCount = 0;

var combinedChoice = combineTotal(numbers);
var total = 0.0
console.log(combinedChoice);
for (var idx in combinedChoice){

    tempArr = []
    tempArr = combinedChoice[idx]
    total = 0.0
    for (jdx in tempArr){
        
        total += tempArr[jdx]
        
    }

    if(total === iWantThis){
    refCount += 1;
    alert(tempArr);
    }
    
}

if(refCount == 0){
    alert("Can't find any answer.");
}
}
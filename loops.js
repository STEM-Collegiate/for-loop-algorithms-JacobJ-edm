// Arrays for testing
const testArrays = [
    [0, 1, 2, 3, 4, 5],              // ascending numbers
    [-2, 4, -6, 8, -10, 12],         // all even numbers
    [1, 3, 5, 7, 9, 11],             // all odd numbers
    [3, -1, 4, 1, 5, -9, 6],         // digits of pi
    [0, 1, undefined, 13, 17],       // undefined values
    [0, 1, null, 13, null]           // null values
];



function sumArray(arr) {
    let total = 0;
    for (val of arr) {
        total += val;
    }
    console.log(total);
    return total;
}

function meanArray(arr) {
    let total = sumArray(arr);
    let mean = total / arr.length;
    console.log(mean);
    return mean;
}

function doubleArray(arr) {
    let newDoubleArr = [];
    for (val of arr) {
        newDoubleArr.push(val * 2);
    }
    console.log(newDoubleArr);
    return newDoubleArr;
}

function squareArray(arr) {
    let newSquareArr = [];
    for (val of arr) {
        newSquareArr.push(val * val);
    }
    console.log(newSquareArr);
    return newSquareArr;
}

function minValue(arr) {
    let min = arr[0];
    for (val of arr) {
        if (val < min) {
            min = val;
        }
    }
    console.log(min);
    return min;
}

function maxValue(arr) {
    let max = arr[0];
    for (val of arr) {
        if (val > max) {
            max = val;
        }
    }
    console.log(max);
    return max;

}

function countEvens(arr) {
    let countEvens = 0;
    for (val of arr) {
        if (val % 2 === 0) {
            countEvens++;
        }
    }
    console.log(countEvens);
    return countEvens;
}

function countPositives(arr) {
    let countPositives = 0;
    for (val of arr) {
        if (val > 0) {
            countPositives++;
        }
    }
    console.log(countPositives);
    return countPositives;
}

function filterOdds(arr) {
    let filterOdds = [];
    for (val of arr) {
        if (val % 2 != 0) {
            filterOdds.push(val);
            console.log(filterOdds);

        }
    }
    return filterOdds;
}

function filterNegatives(arr) {
    let filterNegatives = [];
    for (val of arr) {
        if (val < 0) {
            filterNegatives.push(val);
            console.log(filterNegatives);
        }
    }
    return filterNegatives;
}
function negativeExists(arr) {
    for (val of arr) {
        if (val < 0) {
            return true;
        }
    }
    return false;
}
function firstEvenNumber(arr) {
    for (val of arr) {
        if (val % 2 === 0) {
            return val;
        }
    }
    return null;
}
function allElementsPositive(arr) {
    for (val of arr) {
        if (val <= 0) {
            return false;

        }
    }
    return true;

}
function allElementsDefined(arr) {
    for (val of arr) {
        if (val == null || val == undefined) {
            return false;
        }
    }
    return true;
}
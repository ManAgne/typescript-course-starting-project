type Combinable = number | string;
type ConvestionDescriptor = 'as-number' | 'as-text';

function combine (
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConvestionDescriptor
    ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges)

const combinesNames = combine('Max', 'Anna', 'as-text');
console.log(combinesNames);
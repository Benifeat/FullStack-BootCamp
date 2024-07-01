// a
let words = ['cat', 'attempt', 'tattle', 'cattle', 'rate'];
let wordsTT = words.filter(word => /tt/.test(word));
console.log(wordsTT); 

// b
let allContainAt = words.every(word => /at/.test(word));
console.log(allContainAt); 

// c
let anyContainStat = words.some(word => /stat/.test(word));
console.log(anyContainStat); 

// d
let filteredArray = ['Cat', 'cot', 'CATER', 'SCat', 'ScUtTLe'].filter(word => /cat/i.test(word));
console.log(filteredArray); 

// e
// i) Output: '1-2,3,4' (only the first occurrence of ',' is replaced)

// ii) Output: '1-2-3-4' (all occurrences of ',' are replaced)

// iii) Output: 'c2 P2 t2 m2' (all occurrences of 'art' in any case are replaced)

// iv) Output:'hacker'   'cater' (the original string is not modified)

// v) Output: 'hacker' (the string is modified and assigned back to the variable)
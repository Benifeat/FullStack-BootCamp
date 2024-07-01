// const nums1 = [55, 20, 32, 45, 88, 90];
//              //0,  1,  2,  3,  4,   5

// nums1.forEach((num,idx) => {

//     // showing the values in the even places
//     if (idx % 2 === 0) console.log(num);

// })

/** MISSION: 
 *  Use nums1.map() and create new numeric array 
 * comprised of the old elements divided by their indexes
 * (except of 0 - return just the number itself)
 */

// const nums2 = nums1.map((num,idx) => {
//     return idx === 0 ? num : num/idx;
// })

// We could shorten our ARROW function:
// 1. If there is only one argument - we could remove the brackets
// 2. If there is only 1 command inside the ARROW function body, we could
//     rid of the curly brackets 
// 3. Without curly brackets it performs "return" anyway - so we should 
//    remove "return" also.

// const nums2 = nums1.map((num,idx) => idx === 0 ? num : num/idx )

// const drinks = ['water','soda','cola','fanta','tea','coffee','wine']
// const foods = ['sushi','pasta','pizza','humburger','soup','cheese','apple']

/** MISSION:
 * Go over the array drinks with forEach and show the list like
 * 1. water and sushi
 * 2. soda and pasta
 * 3. cola and pizza ...
 * 
 */

// drinks.forEach((item,index) => 
//     console.log(`${index+1}. ${item} and ${foods[index]}`));

// // We want to Capitalize each drink

// drinks.forEach((drink,idx) => {

//     drinks[idx] = drink[0].toUpperCase() + drink.slice(1).toLowerCase()
//     console.log(drink)

// })

// // drinks = [1,2,3] - causes error: Assignment to constant variable

// foods.forEach((food, idx, ar) => {

//     ar[idx] = food[0].toUpperCase() + food.slice(1).toLowerCase()
//     console.log(food)

// })





const foods = ['pizza', 'falafel', 'paSTa', 'sandwich', 'saLAd', 'hummus', 'soup'];
const drinks = ['beer', 'water', 'coFFEe', 'tea', 'milk', 'juICe', 'cola'];
const nums1 = [4, 5, 6, 1, 2, 2, 8];
const nums2 = [1, 3, 7, 0, 2, 5, 3];

// a) Drink Menu
const drinksOutput = document.getElementById('drinksOutput');
let drinksString = '';
drinks.forEach((drink, index) => {
    drinksString += `${index + 1}. ${drink}\n`;
});
drinksOutput.textContent = drinksString;

// b) Average even indexes
const avgOutput = document.getElementById('avgOutput');
function avgOfArr(arr) {
    let sum = 0;
    let count = 0;
    arr.forEach((num, index) => {
        if (index % 2 === 0) {
            sum += num;
            count++;
        }
    });
    return (sum / count).toFixed(2);
}
avgOutput.textContent = `Average of even-indexed numbers: ${avgOfArr(nums1)}`;

// c) First 3 charachters when the index is odd
const foodsOutput = document.getElementById('foodsOutput');
let foodsString = '';
foods.forEach((food, index) => {
    foodsString += `${index % 2 !== 0 ? food.slice(0, 3) : food}\n`;
});
foodsOutput.textContent = foodsString;

// d) Reverse cap
const ReverseCapOutput = document.getElementById('ReverseCapOutput');
const ReverseCapFoods = foods.map(food => food[0].toLowerCase() + food[1].toLowerCase() + food.slice(2).toUpperCase());
ReverseCapOutput.textContent = ReverseCapFoods.join('\n');

// e) food quantity
const orderOutput = document.getElementById('orderOutput');
let orderString = '';
foods.forEach((food, index) => {
    orderString += `${nums1[index]} ${food}\n`;
});
orderOutput.textContent = orderString;

// f) Summer order 
const summerOrderOutput = document.getElementById('summerOrderOutput');
let summerOrderString = '';
foods.forEach((food, index) => {
    const drink = drinks[index].toLowerCase();
    if (drink !== 'coffee' && drink !== 'tea' && drink !== 'milk') {
        summerOrderString += `${nums1[index]} ${food} and ${nums2[index]} ${drinks[index]}\n`;
    } else {
        summerOrderString += `${nums1[index]} ${food} and NO ${drinks[index]}\n`;
    }
});
summerOrderOutput.textContent = summerOrderString;

// g) Adjust func on num 2 (even= mult by 10,odd= add number from num1)
const numsOutput = document.getElementById('numsOutput');
nums2.forEach((num, index) => {
    nums2[index] = index % 2 === 0 ? num * 10 : num + nums1[index];
});
numsOutput.textContent = nums2.join(', ');

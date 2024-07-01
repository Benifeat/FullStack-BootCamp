const firstDiv = document.querySelector('.first');
const secondDiv = document.querySelector('.second');
const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnShow = document.querySelector('#show');
const btnFirstColor = document.querySelector('#firstColor');

const startHourglass = document.querySelector('.fa-hourglass-start');
const halfHourglass = document.querySelector('.fa-hourglass-half');
const endHourglass = document.querySelector('.fa-hourglass-end');

let sleepTime = 2500;
let timer1,timer2,timer3,timer4;

/** MISSION
 * 
 * Add twice setTimeout() to the callback function
 * of the next listener to make one more emojee appeare
 * next to the first after some time and then the third 
 * emojee after some time
 * 
 */

btnShow.addEventListener('click', () => {

    firstDiv.innerText = "Just a minute ..."
    
    
    // The timeout is in milliseconds
    timer2 = setTimeout(() => {
        
        firstDiv.innerText = "😁"
        // EMOJISENSE
        // or
        // Windows + v
        timer3 = setTimeout(() => {

            firstDiv.innerText += "😅"
            
            timer4 = setTimeout(() => {
                
                firstDiv.innerText += "😠"

            },sleepTime)

        },sleepTime)


    },sleepTime)

    console.log('The timer is still running ...')

})

/** MISSION:
 * Add listener to the second button.
 * 
 * When it clicked, it should change the color of the FIRST div
 * to orange after the "sleepTime" is over
 */

btnFirstColor.addEventListener("click", () => {

    // setTimeout is asyncronous function - זאת אומרת
    // הפונקציה הזאת עובדת מאחורי הקלעים במקביל
    // לפעולות פשוטות יותר של 
    // JS

    // setTimeout() returns it's id, and we get it into timer1
    timer1 = setTimeout(() => {

        firstDiv.classList.replace('purple','orange');
        secondDiv.innerText += "First div already has changed color\n"

    }, sleepTime*2)

    secondDiv.innerText += "First div is going to change color\n"

})

btnStart.addEventListener('click',() => {

    startHourglass.classList.remove('invisible');
    
    setTimeout(() => {
        
        halfHourglass.classList.remove('invisible');
        startHourglass.classList.add('invisible');

        setTimeout(() => {
        
            endHourglass.classList.remove('invisible');
            halfHourglass.classList.add('invisible');
   
        }, sleepTime/2)

    }, sleepTime)



})

btnStop.addEventListener('click', () => {

    console.log(`${timer1} Stopped`)
    secondDiv.innerText = 'Stopped!'
    clearTimeout(timer1);
    
})

/** MISSION:
 * Create variables timer2,timer3, timer4 for more timer IDs.
 * 
 * Get there the IDs of the timers that show EMOJEEs.
 * 
 * Stop them inside callback function of the new listener
 * on btnStop "click" event
*/

btnStop.addEventListener('click',() => {
    
    secondDiv.innerText = 'Emojees Stopped!'
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    
})




const streetlight = document.querySelector('.streetlight');
const person = document.querySelector('.person');
const resetBtn = document.querySelector('#reset');
const goBtn = document.querySelector('#go');
const maintenanceBtn = document.querySelector('#maintenance');

let goTimer;

resetBtn.addEventListener('click', () => {
    streetlight.classList.add('red');
    person.classList.remove('walking');
    person.classList.add('standing');
});

goBtn.addEventListener('click', () => {
    secondDiv.innerText = "The button was pressed, wait!";

    goTimer = setTimeout(() => {
        streetlight.classList.remove('red');
        streetlight.classList.add('green');
        person.classList.remove('standing');
        person.classList.add('walking');

        setTimeout(() => {
            streetlight.classList.remove('green');
            streetlight.classList.add('red');
            person.classList.remove('walking');
            person.classList.add('standing');
        }, 5000); // Change to the desired longer delay
    }, 2000); // Change to the desired shorter delay
});

maintenanceBtn.addEventListener('click', () => {
    clearTimeout(goTimer);
    streetlight.classList.remove('red', 'green');
    streetlight.classList.add('yellow');
    person.classList.remove('standing', 'walking');
    person.classList.add('maintenance');
});
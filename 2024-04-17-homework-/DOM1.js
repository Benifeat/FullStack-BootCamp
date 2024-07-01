const divList = document.querySelectorAll('.container > div');
const btnYellow = document.querySelector('#yellow');
const btnAddText = document.querySelector('#add-text');
const btnYellowBody = document.querySelector('#yellow-body');
const btnYellowDiv = document.querySelector('#yellow-div');

function addYellow() {

    divList[0].classList.add('yellow');

}

function addText() {

    divList[1].innerText = 'I am the text'

}

function changeYellow(el) {

    el.classList.toggle('yellow');

}

const changeYellowTxt = () =>  {

    if (btnYellow.innerText === 'Yellow') 

        btnYellow.innerText = 'Hello'
        
    else
        
        btnYellow.innerText = 'Yellow'
}

// Tell the BROWSER to create LISTENER on the BUTTON "Yellow"
// on event "click" and to keep for now the function "addYellow",
// till the event will happen.
// When the event happens the BROWSER passes the function
// addYellow to the JS process, and the function gets into
// the "CALLBACK QUEUE"
btnYellow.addEventListener('click', addYellow);

/**
 * MISSION: 
 * - create function addText() which will add some innerText to the second DIV
 * - add event listener to the button "add text" with the callback function addText
 * 
 */

btnAddText.addEventListener('click',addText);

/* instead of function name we can use anonymous function declaration */
btnYellowBody.addEventListener('click',function() {

    changeYellow(document.body);

})

/* MISSION: 
    create event listener on the button btnYellowDiv - that will 
    change Yellow background of the second div
*/

btnYellowDiv.addEventListener('click',function() {

    changeYellow(divList[1]);

})

btnYellow.addEventListener('mouseenter',() => {

    changeYellow(btnYellow);

})

btnAddText.addEventListener('mouseover',() => {

    changeYellow(btnAddText);

})

/**
 * MISSION:
 * - Create arrow function changeYellowTxt which
 *   checks the innerText of btnYellow:
 *    if the text is "Yellow" it should change it to 'Hello',
 *    othervise - to "Yellow"
 * 
 * - Add event listener to this button with this function,
 * on the event "mouseout"
 * 
 */

btnYellow.addEventListener('mouseout', changeYellowTxt);




/*the home work assignment extension */
const turquoiseDiv = document.querySelector('.turquoise');
const redDiv = document.querySelector('.red');

function showFavouriteFood() {
    turquoiseDiv.innerText = "My favourite food is ";
    redDiv.innerText = "pizza";
}

turquoiseDiv.addEventListener('mouseover', showFavouriteFood);
redDiv.addEventListener('mouseover', showFavouriteFood);

function toggleWidth() {
    if (redDiv.style.width === '300px') {
        redDiv.style.width = '200px';
    } else {
        redDiv.style.width = '300px';
    }
}

btnYellow.addEventListener('click', toggleWidth);

function changeButtonBackground(event) {
    const button = event.target;
    button.classList.toggle('green');
}

btnYellowBody.addEventListener('mouseover', changeButtonBackground);
btnYellowBody.addEventListener('mouseout', changeButtonBackground);
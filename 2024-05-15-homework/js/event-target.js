const out = document.querySelector('.out');

/**
 * MISSION1:
 * Get NodeList named "btns" of each element
 * with class ".btn"
 */

const btns = document.querySelectorAll('.btn');

/**
 * MISSION2:
 * Create function showLetter(), that gets event
 * object as a parameter and uses innerText of
 * event.target to add it's letter to the innerText of "out"
 */

function showLetter(e) {

    out.innerText += e.target.innerText;

}

/**
 * MISSION3:
 * Go with forEach over btns and add eventListener
 * on "click" event for each button
 */



btns.forEach(btn => btn.addEventListener('click',showLetter))
/* btns.forEach(btn => 
    btn.addEventListener('click',(e) => out.innerText += e.target.innerText)) */




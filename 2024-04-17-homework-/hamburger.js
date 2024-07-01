const firstNameInp = document.querySelector('#first-name');
const birthYearInp = document.querySelector('#birth-year');
const personOut = document.querySelector('.personal-details');
const hobbieInput = document.querySelector('#hobbie');
const eyeColorInput = document.querySelector('#eye-color');

const showDetails = () => {
    let firstName = firstNameInp.value;
    let birthYear = birthYearInp.value;
    let hobbie = hobbieInput.value;
    let eyeColor = eyeColorInput.value;

    personOut.innerText = '';

    personOut.innerText = `Your name is ${firstName} \n
                           Your birth year is ${birthYear} \n
                           Your hobbie is ${hobbie} \n
                           Your eye color is ${eyeColor}`;
};

/**
 * "change" event means that the user has finished to enter the input,
 * and the event "change" happens if we take the field out of focus 
 * (click in another location) or if we press "Enter"
 */
firstNameInp.addEventListener('change',showDetails)

birthYearInp.addEventListener('input',showDetails)

hobbieInput.addEventListener('change', showDetails);
eyeColorInput.addEventListener('input', showDetails);







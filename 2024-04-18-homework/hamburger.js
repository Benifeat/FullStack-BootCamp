// const firstNameInp = document.querySelector('#first-name');
// const birthYearInp = document.querySelector('#birth-year');
// const personOut = document.querySelector('.personal-details');

// const showDetails = () => {

//     personOut.innerText = '';

//     let firstName = firstNameInp.value;
//     let birthYear = +birthYearInp.value;

//     if (firstName)
//         personOut.innerText = `Your name is ${firstName} \n`

//     console.log(`year is ${birthYear} and year type is ${typeof birthYear}`)
    

//     if (birthYear) {

//         console.log(`${birthYear} + 10 = ${birthYear+10}`)
//         const now = new Date();
//         console.log(`"now" data type is ${typeof now}`)
//         let currYear = now.getFullYear();

//         personOut.innerText += `your age is ${currYear-birthYear}`;
//     }



    

// }

// /**
//  * "change" event means that the user has finished to enter the input,
//  * and the event "change" happens if we take the field out of focus 
//  * (click in another location) or if we press "Enter"
//  */
// firstNameInp.addEventListener('change',showDetails)

// birthYearInp.addEventListener('input',showDetails)




/// holliday HW

const numInput = document.querySelector('#num');
const personsInput = document.querySelector('#persons');
const gluteneCheckbox = document.querySelector('#glutene');
const perPersonSpan = document.querySelector('#per-person');
const withGluteneSpan = document.querySelector('#with-glutene');
const clickButton = document.querySelector('.click');
//update by input
function updateOrderSummary() {
  const numHamburgers = parseInt(numInput.value) || 0;
  const numPersons = parseInt(personsInput.value) || 0;
  const isGluteneFree = gluteneCheckbox.checked;
// case zero persons
  if (numPersons === 0) {
    perPersonSpan.textContent = '(no persons specified)';
    withGluteneSpan.textContent = '';
    //other wise each person portion 
  } else {
    const perPerson = numHamburgers / numPersons;
    perPersonSpan.textContent = `${perPerson.toFixed(2)}`;
    withGluteneSpan.textContent = isGluteneFree ? ' without glutene' : ' with glutene';
  }
}
//print order to console
function printConsoleOrder() {
  const numHamburgers = parseInt(numInput.value) || 0;
  const numPersons = parseInt(personsInput.value) || 0;
  const isGluteneFree = gluteneCheckbox.checked;

  if (numPersons === 0) {
    console.log(`Order: ${numHamburgers} hamburgers (no persons specified)`);
  } else {
    const perPerson = numHamburgers / numPersons;
    const gluteneFreeOption = isGluteneFree ? 'without glutene' : 'with glutene';
    console.log(`Order: ${numHamburgers} hamburgers for ${numPersons} persons (${perPerson.toFixed(2)} hamburgers per person, ${gluteneFreeOption})`);
  }
}

numInput.addEventListener('input', updateOrderSummary);
personsInput.addEventListener('input', updateOrderSummary);
gluteneCheckbox.addEventListener('change', updateOrderSummary);
clickButton.addEventListener('click', printConsoleOrder);
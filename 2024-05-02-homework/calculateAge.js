function calculateAge() {
    const birthYear = parseInt(document.getElementById("birthYear").value);
    const birthMonth = parseInt(document.getElementById("birthMonth").value) - 1; // Months are 0-based
    const birthDay = parseInt(document.getElementById("birthDay").value);

    const currDate = new Date();
    const currYear = currDate.getFullYear();
    const currMonth = currDate.getMonth();
    const currDay = currDate.getDate();

    let age = currYear - birthYear;

    // Adjust age if birthday is in the future
    if (currMonth < birthMonth || (currMonth === birthMonth && currDay < birthDay)) {
        age--;
    }

    document.getElementById("result").textContent = `Your age is: ${age} years`;
}
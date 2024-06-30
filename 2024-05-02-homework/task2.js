const checkNumber = (x) => {
    return !isNaN(x) && x !== null && x !== '' ?
        x < 70 ? `${x} < 70` :
        x > 210 ? `${x} > 210` :
        `${x} is between 70 and 210` :
        'Invalid input';
};

function displayResult1() {
    const x = document.getElementById("numberInput").value;
    const result = checkNumber(x);
    document.getElementById("result1").textContent = result;
}



const checkNameAndFamilyName = (name, familyName) => {
            return name !== null && name !== '' && familyName !== null && familyName !== '' ?
                (name === 'John' && familyName === 'Smith') || (name === 'Jane' && familyName === 'Smith') || (name === 'Jack' && familyName === 'Daniels') ?
                "I'm happy to see you!" :
                "Go away" :
                "Please enter your name and family name";
        };

        function displayResult2() {
            const name = document.getElementById("nameInput").value;
            const familyName = document.getElementById("familyNameInput").value;
            const result = checkNameAndFamilyName(name, familyName);
            document.getElementById("result2").textContent = result;
        }

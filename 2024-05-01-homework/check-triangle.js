
const inpA = document.querySelector('#a');
const inpB = document.querySelector('#b');
const inpC = document.querySelector('#c');

const validationSpan = document.querySelector('#validation');
const totalValidationSpan = document.querySelector('#total-validation');
const resultSpan = document.querySelector('#result');

const triangle = {
    a: undefined,
    b: undefined,
    c: undefined,
}

function checkNum(inpNum, inpName) {
    let num = inpNum;
    let lowInpName = inpName.toLowerCase();

    if (num === '' || isNaN(num)) {
        validationSpan.innerText = `Input ${inpName} is not a number`;
        triangle[lowInpName] = undefined;
    } else {
        num = +num;
        if (num <= 0) {
            validationSpan.innerText = `Input ${inpName} is NOT POSITIVE`;
            triangle[lowInpName] = undefined;
        } else {
            validationSpan.innerText = `Input ${inpName} is valid`;
            triangle[lowInpName] = num;
        }
    }
}

function checkTotal() {
    let a = triangle.a;
    let b = triangle.b;
    let c = triangle.c;

    if (!a || !b || !c) {
        totalValidationSpan.innerText = 'NOT VALID';
        resultSpan.innerText = '...';
    } else {
        totalValidationSpan.innerText = 'VALID';

        if (isTriangle(a, b, c)) {
            resultSpan.innerText = 'This is a triangle.';
            checkTriangleType(a, b, c);
        } else {
            resultSpan.innerText = 'This is not a triangle.';
        }
    }
}

function isTriangle(a, b, c) {
    return a + b > c && b + c > a && a + c > b;
}

function checkTriangleType(a, b, c) {
    if (a === b && b === c) {
        resultSpan.innerText += ' It is an equilateral triangle.';
    } else if (a === b || b === c || a === c) {
        resultSpan.innerText += ' It is an isosceles triangle.';
    } else {
        resultSpan.innerText += ' It is neither equilateral nor isosceles.';
        // Optional: Check for right-angled triangle
        checkRightAngle(a, b, c);
    }
}

function checkRightAngle(a, b, c) {
    // Check for right-angled triangle using Pythagorean theorem
    const sides = [a, b, c].sort((x, y) => x - y);
    const [smallSide1, smallSide2, hypotenuse] = sides;

    if (Math.pow(hypotenuse, 2) === Math.pow(smallSide1, 2) + Math.pow(smallSide2, 2)) {
        resultSpan.innerText += ' It is a right-angled triangle.';
    } else {
        resultSpan.innerText += ' It is not a right-angled triangle.';
    }
}

// Add event listeners
inpA.addEventListener('input', () => {
    checkNum(inpA.value, 'A');
    checkTotal();
});

inpB.addEventListener('input', () => {
    checkNum(inpB.value, 'B');
    checkTotal();
});

inpC.addEventListener('input', () => {
    checkNum(inpC.value, 'C');
    checkTotal();
});
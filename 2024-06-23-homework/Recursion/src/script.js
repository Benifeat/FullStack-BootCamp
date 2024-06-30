function digitSum(num) {
    if (num < 10) {
      return num;
    }
  
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
  
    return digitSum(sum);
  }
  
  function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    }
  
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
  
    return isPalindrome(str.slice(1, -1));
  }
  
  function createRecursionElement(depth = 0) {
    if (depth === 10) return null;
  
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.textAlign = 'center';
    div.style.color = 'white';
    div.style.fontSize = '2rem';
    div.style.border = '5px solid white';
    div.style.padding = '0rem 0.5rem 0.2rem 0rem';
    div.style.margin = '0rem 2rem 0rem 2rem';
  

    if (depth < 9) {
      const innerDiv = createRecursionElement(depth + 1);
      innerDiv.style.transform = 'scale(0.75)';
      div.appendChild(innerDiv);
    }
    const recursionDiv = document.createElement('div');
    recursionDiv.textContent = 'RECURSION';
    div.appendChild(recursionDiv);
  
    const againDiv = document.createElement('div');
    againDiv.textContent = 'Here we go again';
    div.appendChild(againDiv);
  
  
    return div;
  }
  document.addEventListener('DOMContentLoaded', function() {
    const recursionElement = createRecursionElement();
    document.body.appendChild(recursionElement);
  });
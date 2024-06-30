let string = 'INDIA';
let arr = string.split('');
arr.splice(1, 4, 'N', 'D', 'O', 'N', 'E', 'S', 'I', 'A'); 
let newString = arr.join('');
console.log(newString); 

let str = "This is a sample string with more than twenty characters.";
let vowels = str.match(/[aeiouAEIOU]/g)?.length || 0;
let consonants = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
console.log(`Vowels: ${vowels}, Consonants: ${consonants}`); 

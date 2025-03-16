// 1. Konversi Fahrenheit ke Celsius
function fahrenheitToCelsius(f) {
    return ((f - 32) * 5 / 9).toFixed(2);
}

console.log(`Fahrenheit ke Celsius: ${fahrenheitToCelsius(100)}`); // Output: 37.78

// 2. Konversi Centimeter ke Kilometer
function cmToKm(cm) {
    return cm / 100000;
}

console.log(`100000 cm = ${cmToKm(100000)} km`); // Output: 1 km

// 3. Mengecek Bilangan Ganjil atau Genap
function isEven(n) {
    return n % 2 === 0;
}

console.log(`1000 -> isEven: ${isEven(1000)}`); // Output: true
console.log(`1001 -> isEven: ${isEven(1001)}`); // Output: false

// 4. Menghapus Kemunculan Pertama dari String
function removeFirstOccurrence(str, search) {
    return str.replace(search, '');
}

console.log(removeFirstOccurrence("Hello world", "ell")); // Output: "Ho world"

// 5. Mengecek Palindrome
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(`"madam" adalah palindrome: ${isPalindrome("madam")}`); // Output: true
console.log(`"hello" adalah palindrome: ${isPalindrome("hello")}`); // Output: false

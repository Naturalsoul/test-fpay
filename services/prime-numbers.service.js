/* 
 * Devuelve arreglo ordenado de manera descente de números primos.
 *
 * @param {Number} initialNumber valor límite para evaluar números primos.
 */
const getPrimeNumbers = (initialNumber) => {
    if (initialNumber < 2) return false;

    let isPrime = true;
    const primeNumbers = [];
    const rangeNumbers = Array.from({ length: initialNumber }, (x, number) => number + 1); // Rango de números hasta initialNumber
    rangeNumbers.shift();

    for (const number of rangeNumbers) {
        isPrime = true;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primeNumbers.push(number);
    }

    return primeNumbers.sort((a, b) => b - a);
}

module.exports = { getPrimeNumbers };
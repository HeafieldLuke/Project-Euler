/*
 *	The prime factors of 13195 are 5, 7, 13, 29
 *	What is the largest prime factor of the number 600851475143
 *
 */

const isPrime = (num) => {
	for (let i = 2; i < (Math.sqrt(num) + 1); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;


}

const largestPrimeFactor = (limit) => {
	let acc = [];
	for (let i = 2; i <= limit; i++) {
		if (isPrime(i) && limit % i === 0) {
			acc.push(i);
			console.log(i);
		}
	}
	return acc[acc.length - 1];
}


console.log(largestPrimeFactor(600851475143));
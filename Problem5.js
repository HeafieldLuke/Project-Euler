/*
 *
 *	2520 is the smallest number that can be divided by each of the numbers
 *	from 1 to 10 without any remainder
 *
 *	What is the smallest positive number that is evenly divisible by all numbers from 1 to 20
 *
 */

const smallestNumberFrom1ToN = n => {

	let i = 1;
	let num = 0;
	let notFound = true;

	while (i !== n) {
		i = 1;
		num += n;

		while (i < n) {
			if (num % i === 0) {
				i++
			} else {
				break;
			}
		}
	}
	return num;
}

console.log(smallestNumberFrom1ToN(20));
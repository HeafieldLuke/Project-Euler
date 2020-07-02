
/*
 *	If we list all the natural numbers below 10 that are multiples of 3 or 5, 
 * 	we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 *	Find the sum of all the multiples of 3 or 5 below 1000.
 */

const sumMultiplesOf3And5 = (limit) => {
	let sum = 0;

	//	Start i at 3, since 1 and 2 are not divisible by 3 or 5	
	for (let i = 3; i < limit; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}
	return sum;
}

console.log(sumMultiplesOf3And5(1000));
/*
 *	Each new term in the fibonacci sequence is generated by adding the previous
 *  two terms. By starting with 1 and 2, the first ten terms will be:
 *	
 *	1, 2, 3, 5, 8, 13, 21, 34, 55, 89
 *
 *	By considering the terms in the Fibonacci sequence whose values do not exceed
 *  four million, find the sum of the even-valued terms
 */

const findEvenSumOfFibonacciNumbers = (limit) => {
	let fib1 = 1, fib2 = 2, sum = 2;

	do {
		fib2 = fib1 + fib2;
		fib1 = fib2 - fib1;

		if (fib2 % 2 == 0) {
			sum += fib2;
		}
	} while (fib1 + fib2 < limit);

	return sum;
}

console.log(findEvenSumOfFibonacciNumbers(4000000));
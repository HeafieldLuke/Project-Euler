/*
 *	A palindromic number reads the same both ways. The largest
 *	palindrome made from the product of two 2 digit numbers is
 *	9009 = 91 x 99
 *
 *	Find the largest palindrome made from the product of two 3 digit numbers
 */


const isPalindrome = (num) => {
	const numString = num.toString();
	const rev = [...numString].reverse().join("");
	
	return numString === rev;

}

const largestPalindrome = (digits) => {

	const start = Math.pow(10, digits - 1);
	const end = Math.pow(10, digits);
	let max = 0;

	for (let i = end - 1; i >= start; i--) {
		for (let j = i; j >= start; j--) {
			if (isPalindrome(j * i)) {
				max =(i*j > max) ? i*j : max;
			}
		}
	}
	return max;
}

console.log(largestPalindrome(2));
console.log(largestPalindrome(3));
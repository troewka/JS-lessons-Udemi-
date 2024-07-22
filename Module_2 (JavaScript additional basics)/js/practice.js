function amountOfPages(summary){
	let sum = '';
	let lastNum = 0;
	for (let i = 1; i <= summary; i++) {
		sum += i;
		if (sum.length === summary) {
			lastNum = i;
			break;
		}		
	}
	return lastNum;
}
console.log(amountOfPages(185));

function isPangram(string) {
	const set = new Set(string.toLowerCase());
	let str = '';

	for (let value of set) {
		if (value === ' ') {
			continue;
		} else {
			str += value;
		}
	}

	return str.length === 26 ? true : false;

}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));


function deepCount(a){
	console.log(a.length);
	if (a.length < 1) {
		console.log(a.length);
	} else if (Array.isArray(a)) {
		let res;
		a.forEach((item) => {
			res += deepCount(item);
		});
		return res;
	}
}
console.log(deepCount(['1', 2, true, ['Sam']]));

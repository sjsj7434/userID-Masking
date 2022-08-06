function makeItMasking(idArray){
	for (let index = 0; index < idArray.length; index++) {
		let id = idArray[index];
		let maskLength = Math.round((id.length % 2 === 0 ? id.length : id.length - 1) / 2);
		let startPos = 0;
		let answer = "";

		startPos = parseInt((id.length - maskLength) / 2, 10);
		
		answer = id.substring(0, startPos);
		for (let index2 = 0; index2 < maskLength; index2++) {
			answer += "*";
		}
		answer += id.substring(startPos + maskLength, id.length);

		console.log(id + " => " + answer + " / maskLength : " + maskLength);
	}
}

makeItMasking([
	"123", "1234", "12345", "123456", "1234567", "12345678", "123456789", "1234567890"
	, "1234567890a", "1234567890ab", "1234567890abc", "1234567890abcd", "1234567890abcde", "1234567890abcdef"
	, "1234567890abcdefg", "1234567890abcdefgh"
]);
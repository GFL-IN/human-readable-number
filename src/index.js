module.exports = function toReadable (number) {
  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];
  let doubles = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let numArr = number.toString();

  if (number === 0) return 'zero';

  // if number less than 20
  if (number < 20) {
    return ones[number];
  }

  //if number >20 and 100<
  if (numArr.length === 2) {
    return (doubles[numArr[0]] + ' ' + ones[numArr[1]]).trim();
  }

  //if nubmer 100 and more
  if (numArr.length === 3) {
    if (numArr[1] === '0' && numArr[2] === '0')
      return ones[numArr[0]] + ' hundred';
    else
      return ones[numArr[0]] + ' hundred ' + toReadable(+(numArr[1] + numArr[2]));
  }
}

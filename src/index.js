module.exports = function toReadable (number) {
    let ones  = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let doubles = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    //получаем число <10 
    if (number < 10) {
      return ones[number];
    }
    //получаем число >= 10 и < 20
    else if (number >= 10 && number < 20) {
      return doubles[number % 10];
    }
    //получаем число >= 20 и < 100
    else if (number >= 20 && number < 100) {
      return number % 10 === 0 ? tens[Math.floor(number / 10 - 2)] : `${tens[Math.floor(number / 10 - 2)]} ${ones[number % 10]}`;
    }
    //получаем число >= 100 и < 1000
    else if (number >= 100 && number < 1000) {
      //если число просто хангрид
      if (number % 100 === 0) {
        return ones[Math.floor(number / 100)] + ' hundred';
      } 
      // если число 101, 102 и тд., получаем десяток 0
      else if (Math.floor(number / 10) % 10 === 0) {
        return `${ones[Math.floor(number / 100)]} hundred ${ones[Math.floor(number % 10)]}`;
      } 
      // получаем десяток, где 1 
      else if (Math.floor(number / 10) % 10 === 1) {
        return `${ones[Math.floor(number / 100)]} hundred ${doubles[Math.floor(number % 10)]}`;
      } 
      else 
        // если 320 и тд, то есть в 0 в единицах
        if (number % 10 === 0) {
            return `${ones[Math.floor(number / 100)]} hundred ${tens[(Math.floor(number / 10) % 10) - 2]}`;
      } else { // во всех оствльных случаях
            return `${ones[Math.floor(number / 100)]} hundred ${tens[(Math.floor(number / 10) % 10) - 2]} ${ones[Math.floor(number % 10)]}`;
      }
    }
}

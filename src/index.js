module.exports = function toReadable (number) {
  let arr19 = ['zero','one','two','three','four', 'five','six','seven','eight','nine', 'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
  let arrDivisibleBy10 = ['ten', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  let arr = String(number).split('');
  let result = '';
  if (number < 20) {
    result = arr19[number]
  } else if (number >= 20 && number < 100 && number % 10 === 0) {
    result = arrDivisibleBy10[arr[0] - 1]
  } else if (number >= 20 && number < 100) {
    result = arrDivisibleBy10[arr[0] - 1] + ' ' + arr19[arr[1]]
  } else if (number >= 100 && number % 100 === 0) {
    result = arr19[arr[0]] + ' hundred'
  } else if (number > 100 && Number(arr[1]) === 0) {
    result = arr19[arr[0]] + ' hundred ' + arr19[arr[2]]
  } else if (number > 100 && Number(String(number).slice(-2)) >= 11 && Number(String(number).slice(-2)) <= 19) {
    result = arr19[arr[0]] + ' hundred ' + arr19[+arr[2] + 10]
  } else if (number > 100 && number % 10 === 0) {
    result = arr19[arr[0]] + ' hundred ' + arrDivisibleBy10[arr[1] - 1]
  } else {
    result = arr19[arr[0]] +' hundred ' + arrDivisibleBy10[arr[1] - 1] + ' ' + arr19[arr[2]]
  }
  return result;
}

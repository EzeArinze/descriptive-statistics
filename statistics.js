class Statistics {
  constructor(numbers) {
    this.numbers = numbers;
  }

  //  calculating for the mean
  calculateMean() {
    let sum = this.numbers.reduce((a, b) => a + b, 0); // using arrow function
    // let sum = this.numbers.reduce(function (a, b) {
    //   return a + b;
    // }, 0);
    return sum / this.numbers.length;
  }

  //  calculating for the median
  calculateMedian() {
    let sortedNumbers = this.numbers.slice().sort(function (a, b) {
      return a - b;
    });
    let length = sortedNumbers.length;
    if (length % 2 === 0) {
      return (sortedNumbers[length / 2 - 1] + sortedNumbers[length / 2]) / 2;
    } else {
      return sortedNumbers[Math.floor(length / 2)];
    }
  }

  //  calculating for the mode
  calculateMode() {
    let numberMap = {};
    this.numbers.forEach(function (number) {
      if (!numberMap[number]) {
        numberMap[number] = 1;
      } else {
        numberMap[number]++;
      }
    });
    let mode = null;
    let maxCount = 0;
    for (let number in numberMap) {
      if (numberMap[number] > maxCount) {
        mode = number;
        maxCount = numberMap[number];
      }
    }
    return mode;
  }

  // calculating for the range
  calculateRange() {
    let min = Math.min(...this.numbers);
    let max = Math.max(...this.numbers);
    return max - min;
  }

  // calculating for the variance
  calculateVariance() {
    let mean = this.calculateMean();
    let variance = this.numbers.reduce((a, b) => a + Math.pow(b - mean, 2), 0);
    // this.numbers.reduce(function (a, b) {
    //   return a + Math.pow(b - mean, 2);
    // }, 0) / this.numbers.length;
    return variance / this.numbers.length;
  }

  // calculating for the standard deviation
  calculateStandardDeviation() {
    return Math.sqrt(this.calculateVariance());
  }

  // calculating for the mean deviation
  calculateMeanDeviation() {
    let mean = this.calculateMean();

    // using arrow function
    let meanDeviation = this.numbers.reduce(
      (a, b) => a + Math.abs(b - mean),
      0
    );
    // this.numbers.reduce(function (a, b) {
    //   return a + Math.abs(b - mean);
    // }, 0) / this.numbers.length;
    return meanDeviation / this.numbers.length;
  }

  //  calculating for the quartile  deviation
  calculateQuartileDeviation() {
    let quartile75 = this.calculatePercentile(75);
    let quartile25 = this.calculatePercentile(25);
    return (quartile75 - quartile25) / 2;
  }

  //  calculating for the percentile
  calculatePercentile(percentile) {
    // the slice() hold's a new array containing all the elements of this.numbers
    let sortedNumbers = this.numbers.slice().sort(function (a, b) {
      return a - b;
    });
    let index = (percentile / 100) * (sortedNumbers.length - 1);
    let floor = Math.floor(index);
    let remainder = index - floor;
    return (
      sortedNumbers[floor] +
      remainder * (sortedNumbers[floor + 1] - sortedNumbers[floor])
    );
  }
}

// Given list of numbers
let numbers = [1, 2, 3, 4, 5, 5, 6]; // Example numbers

// Create an instance of Statistics
let calculator = new Statistics(numbers);

// Calculate statistics
let mean = calculator.calculateMean();
let median = calculator.calculateMedian();
let mode = calculator.calculateMode();
let range = calculator.calculateRange();
let variance = calculator.calculateVariance();
let standardDeviation = calculator.calculateStandardDeviation();
let meanDeviation = calculator.calculateMeanDeviation();
let quartileDeviation = calculator.calculateQuartileDeviation();

// Output the results
console.log("Numbers:", numbers);
console.log("Mean:", mean);
console.log("Median:", median);
console.log("Mode:", mode);
console.log("Range:", range);
console.log("Variance:", variance);
console.log("Standard Deviation:", standardDeviation);
console.log("Mean Deviation:", meanDeviation);
console.log("Quartile Deviation:", quartileDeviation);

function multiply() {
  console.log("hello");

  const firstNumber = document.getElementById("firstNumber").value;
  console.log(firstNumber);

  const secondNumber = document.getElementById("secondNumber").value;
  console.log(secondNumber);
  //output

  //process
  const answer = firstNumber * secondNumber;
  console.log(answer);

  document.getElementById("output").innerText = answer;
}

function calcAge() {
  console.log("calcAge");

  const years = document.getElementById("years").value;
  console.log(years);

  const days = years * 365;
  console.log(days);

  document.getElementById("ageOutput").innerText = days;
}

function increment() {
  //test the link
  console.log("increment linked");

  //input
  const strİncrement = document.getElementById("inputİncrement").value;

  // process
  let ansİncrement = parseInt(strİncrement);
  //ansicrement = ansİncrement + 1; //option 1
  //ansİncrement += 1; //option 2
  ansİncrement++; //option 3

  console.log(ansİncrement);

  //output
  document.getElementById("parİncrement").innerText = ansİncrement;
}

// convert hours to seconds//
function convert() {
  console.log("convertHours");

  //input//
  const strHours = document.getElementById("seconds").value;

  //process//

  let hours = parseInt(strHours);
  const seconds = hours * 3600;
  console.log(seconds);

  output;

  document.getElementById("secondsOutput").innerText = seconds;
}

function arrayElement() {
  console.log("array element linked");

  //input//
  const strArray1 = document.getElementById("inputArray1").value;
  const strArray2 = document.getElementById("inputArray2").value;
  const strArray3 = document.getElementById("inputArray3").value;

  //process//

  const ansArrays = [strArray1, strArray2, strArray3]; // defined
  const firstElement = ansArrays[0]; //strArray1

  //output//
  document.getElementById("parArray").innerText = firstElement;
}

/**
 * Gets the body mass index of a person
 * @param {string} mass  input value as string
 * @param {*} height  input value as string
 * @returns
 */
function bmi(mass, height) {
  //procoess
  const intMass = parseInt(mass);
  const intHeight = parseInt(height);

  const answer = divide(intMass, squared(intHeight));

  return answer;
}
/**
 * divides one number from the second number
 * @param {number} firstNumber the nominator
 * @param {number} secondNumber the denominator
 * retu
 * rns
 */

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

/**
 * multiply a number by itself
 * @param {*} number the numbe to multiply wıth
 * @returns
 */

function squared(number) {
  return number * number;
}

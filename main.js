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

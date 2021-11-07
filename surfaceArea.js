function calcSurfaceArea(base, height) {
  console.log("i am connected");
  console.log("money came in", base, height);

  //input

  //process
  const answer = 0.5 * base * height;
  console.log(answer);

  //output

  return answer;
}

function getInput(id) {
  return document.getElementById(id).value;
}
function showOutput(id, message) {
  document.getElementById(id).innerText = message;
}

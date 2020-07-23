const displayView = document.querySelector("#textview");
function insert(num) {
  displayView.value = displayView.value + num
}
function equal() {
  var exp = displayView.value;
  if (exp) {
    displayView.value = eval(exp);
  }
}
function clear() {
  displayView.value = "";
}
function back() {
  var exp = displayView.value;
  displayView.value = exp.substring(0,exp.length - 1);
}
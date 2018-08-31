function PE() {
  this.problems = {
    'p1': 'https://projecteuler.net/problem=1'
  }
}

// sum of multiples of 3 and 5 under 1000
PE.prototype.p1 = function () {
  let n1 = 3;
  let n2 = 5;
  let max = 1000;
  let sum = 0;

  for (let i=0; i<max; i++) {
    if ((i%n1==0) || (i%n2==0)) {
      sum += i;
    }
  }
  return sum;
}

function test() {
  let el = document.getElementById("res");
  if (el) {
    let pe = new PE();
    el.innerHTML = pe.p1();
  }
}
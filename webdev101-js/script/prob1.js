var multiply = function() {

  var i = 0;
  var x = 0;

  while (i < 1000) {

    if (i % 3 === 0 || i % 5 === 0) {

      x += i;
    }

    i++;

  }

  return x;

}

console.log('the sum is ' + multiply());
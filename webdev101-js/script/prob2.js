var fib = function(max) {

  var f = [1, 2]; // defining the first two elements 
  var x = 2; // for some reason, the sum of the evens is not considering 2 on the var f, so i declared x beginning with this value.

  // despite i prefer using while, i couldn´t figure out a way to make it work, so i came with this sort of sloppy solution, where the max var will be the highest fibonacci number lower than 4.000.000 (found by brute force)
  
  for (var i = 2; i < max; i++) {

    f[i] = f[i - 1] + f[i - 2];

    if (f[i] % 2 === 0) {

      x += f[i];

    }
  }

  return x;

}

console.log(fib(32));